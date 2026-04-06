FROM python:3.11-slim

WORKDIR /app
ENV PIP_PROGRESS_BAR=off
ENV PIP_DISABLE_PIP_VERSION_CHECK=1

COPY requirements.txt ./
RUN pip install --progress-bar off --root-user-action=ignore -r requirements.txt

# Copy backend
COPY backend/ ./backend/

# Copy prebuilt frontend assets
COPY static/ ./static/

# Create data directory for persistent storage
# chmod 777 allows running as non-root user (e.g., with docker compose user: directive)
RUN mkdir -p /app/data /app/logs && chmod 777 /app/data /app/logs

# Environment variables
ENV PYTHONUNBUFFERED=1
ENV DATA_DIR=/app/data
ENV LOG_DIR=/app/logs
ENV PORT=8000

EXPOSE 322
EXPOSE 990
EXPOSE 3000
EXPOSE 3002
EXPOSE 6000
EXPOSE 8000
EXPOSE 8883
EXPOSE 50000-50100

# Health check (uses PORT env var via shell)
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD python -c "import urllib.request, os; urllib.request.urlopen(f'http://localhost:{os.environ.get(\"PORT\", \"8000\")}/health')" || exit 1

# Run the application
# Use standard asyncio loop (uvloop has permission issues in some Docker environments)
# Port is configurable via PORT environment variable (default: 8000)
CMD ["sh", "-c", "uvicorn backend.app.main:app --host 0.0.0.0 --port ${PORT:-8000} --loop asyncio"]
