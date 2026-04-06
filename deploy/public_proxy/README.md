# Public Proxy Deployment

This setup keeps Bambuddy and printer connectivity on the local development board,
and uses a lightweight public server only for HTTPS entry and forwarding.

Recommended topology:

- Local board:
  - Runs Bambuddy
  - Stays on the same LAN as the Bambu printer
  - Initiates a WireGuard tunnel to the public server
- Public server `43.160.198.64`:
  - Terminates HTTPS for `sysuzgxytj.top`
  - Proxies requests through WireGuard to the board

Why this layout:

- WebSocket traffic works cleanly
- MJPEG / long-lived streams work cleanly
- File uploads and slicing downloads do not need special NAT hacks
- The board stays private and only makes outbound connections

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
3. Create `/var/www/letsencrypt`.
4. Generate WireGuard keys and use [wireguard/vps-wg0.conf.example](./wireguard/vps-wg0.conf.example).
5. Bring up WireGuard:

```bash
wg-quick up wg0
systemctl enable wg-quick@wg0
```

6. Open these ports on the public server:

- `80/tcp`
- `443/tcp`
- `51820/udp`

7. Issue a certificate after DNS points to `43.160.198.64`:

```bash
curl -fsSL https://get.acme.sh | sh
~/.acme.sh/acme.sh --set-default-ca --server letsencrypt
~/.acme.sh/acme.sh --issue -d sysuzgxytj.top -d www.sysuzgxytj.top --webroot /var/www/letsencrypt --keylength ec-256
~/.acme.sh/acme.sh --install-cert -d sysuzgxytj.top --ecc \
  --fullchain-file /etc/nginx/ssl/sysuzgxytj.top/fullchain.pem \
  --key-file /etc/nginx/ssl/sysuzgxytj.top/privkey.pem \
  --reloadcmd "systemctl reload nginx"
```

8. Validate and start Nginx:

```bash
nginx -t
systemctl enable --now nginx
```

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
