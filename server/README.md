# 腾讯云服务器部署说明

服务器节点承担公网入口和队列兜底角色。它不直接控制实验室内打印机，而是负责：

- 提供 `https://sysuzgxytj.top`
- 运行云端队列后端 `bambuddy-queue`
- 在开发板离线时继续承载队列查看、密码校验和上传登记
- 通过 Nginx 将绝大多数 API 转发到开发板
- 与开发板进行手动登记队列的双向同步

## 服务器职责

- HTTPS / Nginx 入口
- 云端队列写入
- 队列同步对端
- 静态资源 / COS 分发接入

## 本目录内容

- `env/bambuddy-queue.env.example`
  云端队列后端环境变量模板
- `systemd/bambuddy-queue.service`
  云端队列后端 systemd 服务模板
- `nginx/sysuzgxytj.top.conf`
  当前推荐的 Nginx 站点配置

## 共享源码位置

服务器运行的队列后端仍然使用仓库根目录的共享源码：

- `../backend/`
- `../requirements.txt`
- `../pyproject.toml`

因此服务器目录只保存服务器角色相关的部署文件，不重复拷贝应用逻辑。

## 当前推荐部署参数

| 项目 | 推荐值 |
| --- | --- |
| 公网域名 | `sysuzgxytj.top` |
| 云服务器 IP | `43.160.198.64` |
| 云端队列后端监听 | `127.0.0.1:18001` |
| 云端同步开发板地址 | `http://127.0.0.1:18000` |
| 开发板同步云端地址 | `http://127.0.0.1:18001` |

## 前置条件

- 一台可公网访问的 Linux 云服务器
- 已解析域名到服务器 IP
- 已安装 Nginx、Python 3.11+、virtualenv
- 已具备一个用于 SSH 反向隧道的账号

## 目录规划

推荐目录：

```text
/opt/bambuddy-queue/
├── current/        # 当前发布版本
├── data/           # 云端队列数据库
├── logs/           # 应用日志
└── venv/           # Python 虚拟环境
```

## 部署步骤

### 1. 上传共享源码

将以下内容发布到服务器版本目录：

- `backend/`
- `requirements.txt`
- `pyproject.toml`

例如：

```bash
rsync -av backend requirements.txt pyproject.toml root@43.160.198.64:/opt/bambuddy-queue/current/
```

### 2. 创建虚拟环境并安装依赖

```bash
python3 -m venv /opt/bambuddy-queue/venv
/opt/bambuddy-queue/venv/bin/pip install -r /opt/bambuddy-queue/current/requirements.txt
```

### 3. 配置环境变量

```bash
cp server/env/bambuddy-queue.env.example /opt/bambuddy-queue/current/.env
```

关键配置：

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

### 4. 安装 systemd 服务

```bash
sudo cp server/systemd/bambuddy-queue.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now bambuddy-queue.service
```

### 5. 安装 Nginx 配置

```bash
sudo cp server/nginx/sysuzgxytj.top.conf /etc/nginx/conf.d/
sudo nginx -t
sudo systemctl reload nginx
```

这份配置会把：

- `/api/v1/queue*`
- `/api/v1/queue-sync*`

转发到云端队列后端 `127.0.0.1:18001`，其余主要 API 则转发到开发板反向隧道 `127.0.0.1:18000`。

### 6. 验证

```bash
curl http://127.0.0.1:18001/health
curl https://sysuzgxytj.top/api/v1/queue/
systemctl status bambuddy-queue.service --no-pager
```

## 队列韧性说明

该服务器部署方案解决的问题是：

- 开发板宕机时，原本前端无法继续上传登记
- 现在公网写入走云端队列后端，不再依赖开发板在线
- 开发板恢复后，再通过双向同步把云端新登记补回本地

也就是说，服务器现在承担的是“公网入口 + 队列兜底”角色，而不是“打印机控制节点”。

## 与 COS 的关系

服务器可以同时配合 COS 提供静态资源与公共文件访问：

- 前端静态资源先构建到 `static/`
- 再通过 `../scripts/publish_static_to_cos.sh` 上传到 COS
- 前端与公共文件地址可以配置为 COS 域名

如果你希望公网尽量减少服务器静态压力，推荐开启这一路径。
