# 公网服务器部署说明

这个节点负责承接公网访问，但不直接控制实验室局域网内的打印机。它的作用是把“用户入口”和“设备控制入口”拆开，让平台在开发板故障时仍然可以继续提供上传登记、密码校验和队列查看。

本文中的域名、服务器地址和 COS 地址均为示例值。实际部署时请替换为你自己的配置。

## 服务器职责

- 提供公网 HTTPS 入口，例如 `https://bambuddy.example.com`
- 运行云端队列后端 `bambuddy-queue`
- 在开发板离线时继续承载上传登记、队列查看和密码校验
- 与开发板进行手动登记队列的双向同步
- 作为开发板 SSH 反向隧道的公网落点
- 可选接入 COS 作为静态资源和公共文件分发层

## 本目录内容

- `env/bambuddy-queue.env.example`
  云端队列后端环境变量模板
- `systemd/bambuddy-queue.service`
  云端队列后端 systemd 服务模板
- `nginx/bambuddy.example.com.conf`
  推荐的公网 Nginx 配置模板

## 共享源码位置

服务器上的队列后端仍然使用仓库根目录的共享源码：

- `../backend/`
- `../requirements.txt`
- `../pyproject.toml`

因此 `server/` 目录只保存公网服务器角色相关的部署文件，不重复拷贝应用逻辑。

## 推荐参数

| 项目 | 推荐写法 | 说明 |
| --- | --- | --- |
| 公网域名 | `bambuddy.example.com` | 用户访问入口、Nginx `server_name`、证书绑定对象 |
| 公网服务器地址 | `203.0.113.10` | 服务器公网 IP 或可解析主机名 |
| 云端队列监听 | `127.0.0.1:18001` | 仅本机监听，不直接暴露公网 |
| 云端访问开发板 | `http://127.0.0.1:18000` | 通过开发板 SSH 反向隧道访问 |
| 开发板访问云端 | `http://127.0.0.1:18001` | 开发板通过本地转发访问云端队列后端 |

## 前置条件

- 一台可公网访问的 Linux 云服务器
- 已将你的域名解析到这台服务器
- 已安装 Git、Nginx、Python 3.11+
- 已具备一个用于 SSH 反向隧道的账号
- 已准备 TLS 证书或 Let’s Encrypt 申请流程

## 目录规划

推荐目录：

```text
/opt/bambuddy-queue/
├── current/        # 当前发布版本
├── releases/       # 历史发布版本
├── data/           # 云端队列数据库
├── logs/           # 应用日志
└── venv/           # Python 虚拟环境
```

## 部署步骤

### 1. 直接从 GitHub 克隆仓库

```bash
sudo mkdir -p /opt/bambuddy-queue/releases /opt/bambuddy-queue/data /opt/bambuddy-queue/logs
RELEASE_DIR="/opt/bambuddy-queue/releases/$(date +%Y%m%d-%H%M%S)"
sudo git clone --depth 1 https://github.com/hiwebsun0914/SYSU_ISE_3D_Print_Manger.git "$RELEASE_DIR"
sudo ln -sfn "$RELEASE_DIR" /opt/bambuddy-queue/current
```

这样服务器可以直接使用仓库中的共享源码、环境变量样板和 Nginx 模板，不需要额外私有补丁包。

### 2. 创建虚拟环境并安装依赖

```bash
sudo python3 -m venv /opt/bambuddy-queue/venv
sudo /opt/bambuddy-queue/venv/bin/pip install -r /opt/bambuddy-queue/current/requirements.txt
```

### 3. 配置环境变量

```bash
sudo cp /opt/bambuddy-queue/current/server/env/bambuddy-queue.env.example /opt/bambuddy-queue/current/.env
```

至少检查这些关键配置：

```env
PORT=18001
DATA_DIR=/opt/bambuddy-queue/data
LOG_DIR=/opt/bambuddy-queue/logs
QUEUE_CONTACT_VIEW_PASSWORD=replace-me
QUEUE_ADMIN_ACTION_PASSWORD=replace-me
QUEUE_SYNC_REMOTE_BASE_URL=http://127.0.0.1:18000
QUEUE_SYNC_SHARED_SECRET=replace-with-a-long-random-string
QUEUE_SYNC_INTERVAL_SECONDS=15
```

说明：

- `QUEUE_CONTACT_VIEW_PASSWORD` 用于队列查看联系人信息
- `QUEUE_ADMIN_ACTION_PASSWORD` 用于删除、改状态等管理动作
- `QUEUE_SYNC_SHARED_SECRET` 需要与开发板端一致
- `QUEUE_SYNC_REMOTE_BASE_URL` 指向开发板反向隧道映射到服务器本机的地址

### 4. 安装 systemd 服务

```bash
sudo cp /opt/bambuddy-queue/current/server/systemd/bambuddy-queue.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now bambuddy-queue.service
```

### 5. 安装 Nginx 配置

```bash
sudo cp /opt/bambuddy-queue/current/server/nginx/bambuddy.example.com.conf /etc/nginx/conf.d/
sudo nginx -t
sudo systemctl reload nginx
```

首次部署前，请先修改以下内容：

- `server_name`
- `ssl_certificate`
- `ssl_certificate_key`
- 静态站点 `root`

这份模板的核心思路是：

- `/api/v1/queue*` 和 `/api/v1/queue-sync*` 走云端队列后端 `127.0.0.1:18001`
- 其余主要 `/api/`、WebSocket 和实时设备接口走开发板反向隧道 `127.0.0.1:18000`

### 6. 验证

```bash
curl http://127.0.0.1:18001/health
curl https://bambuddy.example.com/api/v1/queue/
systemctl status bambuddy-queue.service --no-pager
```

## 更新发布

推荐使用“新目录克隆 + 切换 `current` 软链接”的方式更新：

```bash
RELEASE_DIR="/opt/bambuddy-queue/releases/$(date +%Y%m%d-%H%M%S)"
sudo git clone --depth 1 https://github.com/hiwebsun0914/SYSU_ISE_3D_Print_Manger.git "$RELEASE_DIR"
sudo /opt/bambuddy-queue/venv/bin/pip install -r "$RELEASE_DIR/requirements.txt"
sudo ln -sfn "$RELEASE_DIR" /opt/bambuddy-queue/current
sudo systemctl restart bambuddy-queue
sudo nginx -t && sudo systemctl reload nginx
```

## 为什么这台服务器是必须的

如果只有开发板在跑 Bambuddy，那么一旦开发板卡死或离线：

- 前端无法继续提交上传登记
- 队列密码输入和联系人查看也会一起失效
- 公网入口本身会失去主要交互能力

把上传登记和队列查看拆到公网服务器后：

- 用户仍然可以继续提交登记
- 云端新增数据会在开发板恢复后自动同步回去
- 打印机控制仍然只留在开发板，不把局域网设备直接暴露到公网

## 与 COS 的关系

COS 不是必须组件，但很适合承担：

- 前端静态资源分发
- 公共文件外链访问
- 降低公网服务器回源压力

典型配置方式：

- `PUBLIC_FILE_BASE_URL` 指向 COS 公共读取地址
- `PUBLIC_FILE_UPLOAD_BASE_URL` 指向 COS 上传或同源地址
- `VITE_ASSET_BASE` 指向前端构建产物发布到 COS 后的目录

示例：

```text
https://example-bucket.cos.ap-guangzhou.myqcloud.com/BAMBUDDY/
```
