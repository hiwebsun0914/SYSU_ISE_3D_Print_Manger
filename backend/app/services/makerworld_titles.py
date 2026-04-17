"""Resolve readable MakerWorld model titles from public model URLs."""

from __future__ import annotations

import json
import logging
import re
from urllib.parse import unquote, urlparse, urlunparse

import httpx

from backend.app.core.config import settings

logger = logging.getLogger(__name__)

_TITLE_SUFFIX_PATTERNS = (
    r"\s*-\s*免费\s*3D\s*打印模型\s*-\s*MakerWorld\s*$",
    r"\s*-\s*MakerWorld\s*$",
    r"\s*\|\s*MakerWorld\s*$",
)
_KANA_TOKEN_RE = re.compile(r"^[\u3040-\u30ff\u31f0-\u31ff\u30fc]+$")


def _strip_title_suffix(title: str) -> str:
    cleaned = title.strip()
    for pattern in _TITLE_SUFFIX_PATTERNS:
        cleaned = re.sub(pattern, "", cleaned, flags=re.IGNORECASE).strip()
    return cleaned


def normalize_resolved_makerworld_title(title: str) -> str:
    """Normalize mirrored or AI-resolved titles for queue display."""
    cleaned = _strip_title_suffix(title)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()

    if re.search(r"[\u4e00-\u9fff]", cleaned):
        tokens = [token for token in cleaned.split(" ") if token]
        filtered_tokens = [token for token in tokens if not _KANA_TOKEN_RE.fullmatch(token)]
        if filtered_tokens:
            cleaned = " ".join(filtered_tokens)

    return re.sub(r"\s+", " ", cleaned).strip()


def clean_makerworld_slug_title(value: str, fallback: str | None = None) -> str:
    """Turn a MakerWorld slug into a basic readable fallback title."""
    try:
        pathname = urlparse(value.strip()).path
        segments = [segment for segment in pathname.split("/") if segment]
        models_index = segments.index("models")
        raw_slug = segments[models_index + 1]
    except Exception:
        return fallback or value

    decoded = unquote(raw_slug).strip()
    decoded = re.sub(r"^\d+-", "", decoded)
    decoded = re.sub(r"[-_]+", " ", decoded)
    decoded = re.sub(r"\s+", " ", decoded).strip()
    return decoded or (fallback or value)


def is_exact_makerworld_slug_title(title: str | None, url: str | None) -> bool:
    """Whether a stored title is just the unprocessed MakerWorld slug."""
    if not title or not url:
        return False

    slug_title = clean_makerworld_slug_title(url, fallback="").strip()
    if not slug_title:
        return False

    return re.sub(r"\s+", " ", title).strip() == slug_title


def parse_makerworld_title_from_markdown(content: str) -> str | None:
    """Extract the title from a jina.ai mirrored MakerWorld page."""
    if not content:
        return None

    for line in content.splitlines():
        stripped = line.strip()
        if stripped.startswith("# "):
            title = normalize_resolved_makerworld_title(stripped[2:])
            if title:
                return title

    title_match = re.search(r"^Title:\s*(.+)$", content, flags=re.MULTILINE)
    if title_match:
        title = normalize_resolved_makerworld_title(title_match.group(1))
        if title:
            return title

    return None


def _normalize_source_url(url: str) -> str:
    parsed = urlparse(url.strip())
    cleaned = parsed._replace(fragment="")
    return urlunparse(cleaned)


async def _resolve_makerworld_model_title_with_ai(url: str) -> str | None:
    api_key = settings.makerworld_title_ai_api_key.strip()
    if not api_key:
        return None

    slug_title = clean_makerworld_slug_title(url)
    if not slug_title:
        return None

    payload = {
        "model": settings.makerworld_title_ai_model,
        "messages": [
            {
                "role": "system",
                "content": (
                    "你是 MakerWorld 中文站模型标题清洗助手。"
                    "输入是模型 URL 的 slug，通常是中文标题转成的拼音，使用空格或连字符分隔，也可能混有英文术语、IP 名和版本号。"
                    "请输出最自然、最可能的标题。"
                    "规则：1) 能确定的拼音恢复成自然中文；"
                    "2) 英文术语、品牌、IP 名、Chibi、figure、laptop stand、V2 这类内容保留英文或常见写法；"
                    "3) 不确定时不要编造成长句；"
                    "4) 只返回 JSON：{\"title\":\"...\"}。"
                    "示例：bi ji ben dian nao zhi jia laptop stand -> 笔记本电脑支架 laptop stand；"
                    "bu lang xiong dan gao shou na he -> 布朗熊蛋糕收纳盒；"
                    "frieren huriren fu li lian chibi figure -> Frieren 芙莉莲 Chibi Figure。"
                ),
            },
            {
                "role": "user",
                "content": json.dumps({"slug": slug_title, "url": _normalize_source_url(url)}, ensure_ascii=False),
            },
        ],
        "temperature": 0.1,
        "response_format": {"type": "json_object"},
    }

    try:
        async with httpx.AsyncClient(timeout=30.0, follow_redirects=True) as client:
            response = await client.post(
                "https://open.bigmodel.cn/api/paas/v4/chat/completions",
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {api_key}",
                },
                json=payload,
            )
        response.raise_for_status()
        data = response.json()
        content = (((data.get("choices") or [{}])[0]).get("message") or {}).get("content", "")
        if not content:
            return None
        if isinstance(content, str):
            parsed = json.loads(content)
            title = normalize_resolved_makerworld_title(str(parsed.get("title", "")).strip())
            return title or None
    except Exception as exc:
        logger.warning("AI title resolution failed for %s: %s", url, exc)

    return None


async def resolve_makerworld_model_title(url: str, allow_slug_fallback: bool = False) -> str | None:
    """Resolve a readable MakerWorld title from the public page mirror."""
    normalized_url = _normalize_source_url(url)
    mirror_url = f"https://r.jina.ai/http://{normalized_url}"

    ai_title = await _resolve_makerworld_model_title_with_ai(url)
    if ai_title:
        return ai_title

    try:
        async with httpx.AsyncClient(timeout=20.0, follow_redirects=True) as client:
            response = await client.get(mirror_url, headers={"Accept": "text/plain"})
        response.raise_for_status()
        title = parse_makerworld_title_from_markdown(response.text)
        if title:
            return title
    except Exception as exc:
        logger.warning("Failed to resolve MakerWorld title for %s: %s", normalized_url, exc)

    if allow_slug_fallback:
        return clean_makerworld_slug_title(url)
    return None
