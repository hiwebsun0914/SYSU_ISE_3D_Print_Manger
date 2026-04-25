from sqlalchemy import text
from sqlalchemy.ext.asyncio import create_async_engine

from backend.app.core.database import _legacy_custom_request_sync_uuid, run_migrations


async def test_print_queue_updated_at_migration_handles_sqlite_default_limitations():
    engine = create_async_engine("sqlite+aiosqlite:///:memory:")

    try:
        async with engine.begin() as conn:
            await conn.execute(
                text(
                    """
                    CREATE TABLE print_queue (
                        id INTEGER PRIMARY KEY,
                        position INTEGER NOT NULL DEFAULT 0,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
                    )
                    """
                )
            )
            await conn.execute(text("CREATE TABLE settings (key VARCHAR(255), value TEXT)"))
            await conn.execute(text("CREATE TABLE virtual_printers (id INTEGER PRIMARY KEY, model VARCHAR(50))"))
            await conn.execute(text("CREATE TABLE users (id INTEGER PRIMARY KEY)"))
            await conn.execute(text("INSERT INTO print_queue (id, position) VALUES (1, 1)"))

            await run_migrations(conn)

            columns = await conn.execute(text("PRAGMA table_info(print_queue)"))
            column_names = {row[1] for row in columns.fetchall()}
            assert "sync_uuid" in column_names
            assert "updated_at" in column_names
            assert "deleted_at" in column_names

            updated_at = await conn.execute(text("SELECT updated_at FROM print_queue WHERE id = 1"))
            assert updated_at.scalar_one() is not None
    finally:
        await engine.dispose()


def test_legacy_custom_request_sync_uuid_is_stable():
    row = {
        "student_id": "24216360",
        "requester_name": "Test User",
        "contact_email": "test@example.com",
        "request_model_url": "https://makerworld.com.cn/zh/models/123456-test",
        "request_notes": "same request",
        "created_at": "2026-04-16 07:25:33",
    }

    assert _legacy_custom_request_sync_uuid(row) == _legacy_custom_request_sync_uuid(dict(row))
