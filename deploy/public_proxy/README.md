# Public Proxy Deployment

This optional deployment pattern keeps Bambuddy and printer connectivity on the local board,
while using a public server for HTTPS entry, API cache warming, JSON snapshot fallback,
and optional queue resilience.

All public-facing values in this document use examples. Replace them before deploying:

- Example public domain: `bambuddy.example.com`
- Example public server IP: `203.0.113.10`
- Example WireGuard peer pair: `10.88.0.1/24` and `10.88.0.2/24`

## Recommended Topology

- Local board:
  - Runs Bambuddy close to the printers
  - Stays on the same LAN as the Bambu devices
  - Initiates WireGuard or SSH connectivity to the public server
- Public server:
  - Terminates HTTPS for `bambuddy.example.com`
  - Serves the built frontend locally or forwards static assets to COS
  - Proxies printer APIs to the board
  - Optionally runs a local queue backend on `127.0.0.1:18001`
  - Keeps selected API responses cached and mirrored as JSON snapshots

## Why Use This Pattern

- WebSocket traffic stays simple while the board is online.
- Long-lived camera and streaming endpoints are easier to expose.
- The board can stay private and only make outbound connections.
- The public server can keep serving cached bootstrap API data if the board is offline.
- Manual queue registration can remain writable through a cloud queue backend.

## Address Plan

- Public server WireGuard IP: `10.88.0.1/24`
- Local board WireGuard IP: `10.88.0.2/24`
- Board Bambuddy over tunnel: `http://10.88.0.2:8000`
- Public HTTPS URL: `https://bambuddy.example.com`

## DNS

Create records similar to:

- `A bambuddy.example.com -> 203.0.113.10`
- `A www.bambuddy.example.com -> 203.0.113.10`

## Public Server Setup

1. Install Nginx and WireGuard.
2. Copy [nginx/bambuddy.example.com.conf](./nginx/bambuddy.example.com.conf) to `/etc/nginx/conf.d/`.
3. Create the local snapshot directory:

```bash
mkdir -p /var/cache/bambuddy_snapshots
```

4. Copy the cache warmer assets:

```bash
mkdir -p /opt/bambuddy/deploy/public_proxy/systemd
cp deploy/public_proxy/cache_warmer.py /opt/bambuddy/deploy/public_proxy/cache_warmer.py
cp deploy/public_proxy/systemd/bambuddy-cache-warmer.service /etc/systemd/system/
cp deploy/public_proxy/systemd/bambuddy-cache-warmer.timer /etc/systemd/system/
```

Optional when Bambuddy auth is enabled:

```bash
cp deploy/public_proxy/systemd/bambuddy-cache-warmer.env.example /etc/default/bambuddy-cache-warmer
```

5. Create `/var/www/letsencrypt`.
6. Generate WireGuard keys and use [wireguard/vps-wg0.conf.example](./wireguard/vps-wg0.conf.example).
7. Bring up WireGuard:

```bash
wg-quick up wg0
systemctl enable wg-quick@wg0
```

8. Open these ports on the public server:

- `80/tcp`
- `443/tcp`
- `51820/udp`

9. Issue a certificate after DNS points to your public server:

```bash
curl -fsSL https://get.acme.sh | sh
~/.acme.sh/acme.sh --set-default-ca --server letsencrypt
~/.acme.sh/acme.sh --issue -d bambuddy.example.com -d www.bambuddy.example.com --webroot /var/www/letsencrypt --keylength ec-256
~/.acme.sh/acme.sh --install-cert -d bambuddy.example.com --ecc \
  --fullchain-file /etc/nginx/ssl/bambuddy.example.com/fullchain.pem \
  --key-file /etc/nginx/ssl/bambuddy.example.com/privkey.pem \
  --reloadcmd "systemctl reload nginx"
```

10. Validate and start services:

```bash
nginx -t
systemctl enable --now nginx
systemctl daemon-reload
systemctl enable --now bambuddy-cache-warmer.timer
systemctl start bambuddy-cache-warmer.service
```

## Optional: Queue-Resilient Split Backend

To keep manual queue registration alive when the board crashes, run a second Bambuddy backend on the public server:

- Board-facing Bambuddy continues serving printer APIs on `10.88.0.2:8000`
- Public server queue backend listens on `127.0.0.1:18001`
- Nginx routes `/api/v1/queue*` and `/api/v1/queue-sync*` to `127.0.0.1:18001`
- All other `/api/` traffic still proxies to the board instance

Recommended queue-backend environment on the public server:

```bash
PORT=18001
DATA_DIR=/opt/bambuddy-queue/data
LOG_DIR=/opt/bambuddy-queue/logs
QUEUE_SYNC_REMOTE_BASE_URL=http://127.0.0.1:18000
QUEUE_SYNC_SHARED_SECRET=replace-with-a-long-random-string
QUEUE_SYNC_INTERVAL_SECONDS=15
```

Recommended queue-sync environment on the board instance:

```bash
QUEUE_SYNC_REMOTE_BASE_URL=http://127.0.0.1:18001
QUEUE_SYNC_SHARED_SECRET=replace-with-the-same-long-random-string
QUEUE_SYNC_INTERVAL_SECONDS=15
```

With this setup:

- the cloud queue instance becomes the public write path for queue password entry and submissions
- the board keeps printer control and local device integrations
- custom queue requests are reconciled in both directions using `sync_uuid + updated_at + deleted_at`

## Local Board Setup

1. Generate WireGuard keys and use [wireguard/board-wg0.conf.example](./wireguard/board-wg0.conf.example).
2. Bring up the tunnel:

```bash
wg-quick up wg0
systemctl enable wg-quick@wg0
```

3. Keep Bambuddy listening on `0.0.0.0:8000`.
4. Set Bambuddy `external_url` to:

```text
https://bambuddy.example.com
```

## Notes

- Public printer control is high risk. Enable Bambuddy authentication before exposing it.
- If uploads are very large, keep `client_max_body_size` high in Nginx.
- If your camera feed is proxied through Bambuddy, the provided Nginx config already disables response buffering.
- The cache warmer intentionally fetches key `GET /api/v1/...` endpoints through the public hostname so Nginx fills both proxy cache and snapshot files under `/var/cache/bambuddy_snapshots`.
- Real-time WebSocket updates still depend on the board being online. The snapshot fallback improves page bootstrap resilience, not live printer-state streaming.
