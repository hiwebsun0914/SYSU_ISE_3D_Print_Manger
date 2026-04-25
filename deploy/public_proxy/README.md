# Public Proxy Deployment

This setup keeps Bambuddy and printer connectivity on the local development board,
and uses the public server for HTTPS entry, API cache warming, and JSON snapshot fallback.

For queue resilience, the public server can also run a second Bambuddy instance dedicated to
manual queue registration (`/api/v1/queue*`), while printer APIs continue proxying to the board.

Recommended topology:

- Local board:
  - Runs Bambuddy
  - Stays on the same LAN as the Bambu printer
  - Initiates a WireGuard tunnel to the public server
- Public server `43.160.198.64`:
  - Terminates HTTPS for `sysuzgxytj.top`
  - Serves the built frontend locally
  - Proxies most API requests through WireGuard to the board
  - Optionally runs a local queue-registration backend on `127.0.0.1:18001`
  - Keeps key API responses cached and mirrored as on-disk JSON snapshots

Why this layout:

- WebSocket traffic works cleanly while the board is online
- MJPEG / long-lived streams work cleanly
- File uploads and slicing downloads do not need special NAT hacks
- The board stays private and only makes outbound connections
- The public server can keep serving cached API data when the board or tunnel fails
- Manual queue registration can stay writable even while the board is offline

## Address Plan

- Public server WireGuard IP: `10.88.0.1/24`
- Local board WireGuard IP: `10.88.0.2/24`
- Bambuddy upstream over tunnel: `http://10.88.0.2:8000`
- Public HTTPS URL: `https://sysuzgxytj.top`

## DNS

Create these records:

- `A sysuzgxytj.top -> 43.160.198.64`
- `A www.sysuzgxytj.top -> 43.160.198.64`

## Public Server

1. Install Nginx and WireGuard.
2. Copy [nginx/sysuzgxytj.top.conf](./nginx/sysuzgxytj.top.conf) to `/etc/nginx/conf.d/sysuzgxytj.top.conf`.
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

9. Issue a certificate after DNS points to `43.160.198.64`:

```bash
curl -fsSL https://get.acme.sh | sh
~/.acme.sh/acme.sh --set-default-ca --server letsencrypt
~/.acme.sh/acme.sh --issue -d sysuzgxytj.top -d www.sysuzgxytj.top --webroot /var/www/letsencrypt --keylength ec-256
~/.acme.sh/acme.sh --install-cert -d sysuzgxytj.top --ecc \
  --fullchain-file /etc/nginx/ssl/sysuzgxytj.top/fullchain.pem \
  --key-file /etc/nginx/ssl/sysuzgxytj.top/privkey.pem \
  --reloadcmd "systemctl reload nginx"
```

10. Validate and start Nginx:

```bash
nginx -t
systemctl enable --now nginx
systemctl daemon-reload
systemctl enable --now bambuddy-cache-warmer.timer
systemctl start bambuddy-cache-warmer.service
```

### Optional: Queue-Resilient Split Backend

To keep manual queue registration alive when the board crashes, run a second Bambuddy backend on the public server:

- Board-facing Bambuddy continues serving printer APIs on `10.88.0.2:8000`
- Public server queue Bambuddy listens on `127.0.0.1:18001`
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
# Preferred when the board already maintains an SSH tunnel to the public server:
# add -L 127.0.0.1:18001:127.0.0.1:18001 to the tunnel and point sync at the local forward
QUEUE_SYNC_REMOTE_BASE_URL=http://127.0.0.1:18001
QUEUE_SYNC_SHARED_SECRET=replace-with-the-same-long-random-string
QUEUE_SYNC_INTERVAL_SECONDS=15
```

With this setup:

- the cloud queue instance becomes the public write path for queue password entry and submissions
- the board keeps printer control and local device integrations
- custom queue requests are reconciled in both directions using `sync_uuid + updated_at + deleted_at`

## Local Board

1. Generate WireGuard keys and use [wireguard/board-wg0.conf.example](./wireguard/board-wg0.conf.example).
2. Bring up the tunnel:

```bash
wg-quick up wg0
systemctl enable wg-quick@wg0
```

3. Keep Bambuddy listening on `0.0.0.0:8000`.
4. Set Bambuddy `external_url` to:

```text
https://sysuzgxytj.top
```

## Notes

- Public printer control is high risk. Enable Bambuddy authentication before exposing it.
- If uploads are very large, keep `client_max_body_size` high in Nginx.
- If your camera feed is proxied through Bambuddy, the provided Nginx config already disables response buffering.
- If the printer stream depends on direct LAN-only camera URLs, those URLs still need to be proxied through Bambuddy to be public.
- The cache warmer intentionally fetches key `GET /api/v1/...` endpoints through the public hostname so nginx fills both proxy cache and the snapshot files under `/var/cache/bambuddy_snapshots`.
- Real-time WebSocket updates still depend on the board being online; the snapshot fallback keeps page bootstrap data available, not live printer state streaming.
