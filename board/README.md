# 开发板部署说明

开发板节点负责连接实验室局域网内的打印机，并运行主 Bambuddy 实例。它是整个平台的“设备侧控制中心”，但不再承担公网队列唯一写入入口。

## 开发板职责

- 连接 Bambu 打印机、摄像头、SpoolBuddy 等本地设备
- 运行主应用容器，处理打印机控制、模型库、归档和局域网功能
- 通过 SSH 隧道把本地 `8000` 暴露到云端 `127.0.0.1:18000`
- 通过 SSH 本地转发访问云端 `127.0.0.1:18001`
- 与云端队列后端进行双向同步

## 本目录内容

- `env/board.env.example`
  开发板最小环境变量示例
- `systemd/bambuddy-reverse-tunnel.service`
  推荐直接安装的 SSH 隧道服务

## 共享源码位置

开发板运行时直接使用仓库根目录的共享源码：

- `../backend/`
- `../frontend/`
- `../spoolbuddy/`
- `../docker-compose.yml`

这意味着：

- 应用源码不在 `board/` 目录内重复维护
- `board/` 只保存开发板角色相关的部署说明和配置模板

## 前置条件

- 一台与打印机处于同一局域网的 Linux 开发板
- 已安装 Docker 与 Docker Compose Plugin
- 能访问腾讯云服务器 `43.160.198.64`
- 已准备 SSH 私钥，用于建立反向隧道

## 关键环境变量

开发板建议使用仓库根目录 `.env`，可参考：

- `../.env.example`
- `env/board.env.example`

最关键的变量如下：

| 变量 | 说明 | 推荐值 |
| --- | --- | --- |
| `PORT` | 主服务端口 | `8000` |
| `QUEUE_CONTACT_VIEW_PASSWORD` | 队列查看联系人密码 | 自定义 |
| `QUEUE_ADMIN_ACTION_PASSWORD` | 队列管理密码 | 自定义 |
| `QUEUE_SYNC_REMOTE_BASE_URL` | 开发板访问云端队列后端的地址 | `http://127.0.0.1:18001` |
| `QUEUE_SYNC_SHARED_SECRET` | 双向同步共享密钥 | 两端一致 |
| `QUEUE_SYNC_INTERVAL_SECONDS` | 同步周期 | `15` |
| `PUBLIC_FILE_BASE_URL` | 公共文件访问地址 | COS 地址 |
| `PUBLIC_FILE_UPLOAD_BASE_URL` | 公共文件上传地址 | COS 地址 |

## 部署步骤

### 1. 克隆仓库

```bash
git clone https://github.com/hiwebsun0914/SYSU_ISE_3D_Print_Manger.git
cd SYSU_ISE_3D_Print_Manger
```

### 2. 配置环境变量

```bash
cp .env.example .env
```

至少补齐以下内容：

```env
QUEUE_CONTACT_VIEW_PASSWORD=replace-me
QUEUE_ADMIN_ACTION_PASSWORD=replace-me
QUEUE_SYNC_REMOTE_BASE_URL=http://127.0.0.1:18001
QUEUE_SYNC_SHARED_SECRET=replace-with-a-long-random-string
QUEUE_SYNC_INTERVAL_SECONDS=15
PUBLIC_FILE_BASE_URL=https://your-bucket.cos.ap-guangzhou.myqcloud.com/BAMBUDDY
PUBLIC_FILE_UPLOAD_BASE_URL=https://your-bucket.cos.ap-guangzhou.myqcloud.com/BAMBUDDY
```

### 3. 启动主应用

```bash
docker compose up -d --build bambuddy
```

如果需要在线切片页面：

```bash
docker compose --profile online-slicer up -d bambu_studio_web
```

### 4. 安装 SSH 隧道服务

将 `systemd/bambuddy-reverse-tunnel.service` 安装到开发板：

```bash
sudo cp board/systemd/bambuddy-reverse-tunnel.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now bambuddy-reverse-tunnel.service
```

该服务会建立两条隧道：

- `-R 127.0.0.1:18000:127.0.0.1:8000`
  把开发板主服务映射到云端，供服务器转发绝大多数 API
- `-L 127.0.0.1:18001:127.0.0.1:18001`
  把云端队列后端回拉到开发板本机，供开发板同步云端上传登记

### 5. 验证

```bash
docker ps
curl http://127.0.0.1:8000/health
systemctl status bambuddy-reverse-tunnel.service --no-pager
```

检查容器环境：

```bash
docker exec bambuddy env | grep QUEUE_SYNC
```

## 推荐运维检查

### 容器状态

```bash
docker logs --tail 100 bambuddy
```

### 队列同步

```bash
docker logs --tail 100 bambuddy | grep queue-sync
```

### 数据卷

主数据默认位于 Docker volume 中，可通过以下命令查看：

```bash
docker volume ls | grep bambuddy
```

## 故障切换策略

开发板故障时：

- 打印机本地控制会受影响
- 但公网用户仍可继续查看队列、输入密码、上传登记
- 待开发板恢复后，云端新增的上传登记会自动同步回开发板

这正是本项目将队列写入口迁移到云端的原因。
