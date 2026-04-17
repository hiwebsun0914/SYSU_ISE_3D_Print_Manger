# Bambuddy 中文说明

> 英文原版说明请见 [README.md](./README.md)

## 项目简介

Bambuddy 是一个面向 **Bambu Lab 3D 打印机** 的自托管打印归档与管理系统，后端使用 **FastAPI**，前端使用 **React + Vite**。

它主要解决以下问题：

- 归档和检索 3MF / gcode / STL 文件
- 管理多台打印机、队列、项目和耗材
- 通过 WebSocket 实时查看打印状态
- 推送通知、智能插座联动、Spoolman / Home Assistant / MQTT 集成
- 提供虚拟打印机 / 远程打印能力

## 主要目录

- `backend/`：FastAPI 后端
- `frontend/`：React 前端源码
- `static/`：前端构建产物，后端会直接从这里提供页面和静态资源
- `data/`：数据库、归档文件等运行数据
- `logs/`：日志目录
- `docker-compose.yml`：Docker 部署入口

## 运行要求

- Python `3.10+`，推荐 `3.11`
- Node.js `20+`，推荐 `20 LTS`
- `ffmpeg`，用于相机/延时摄影相关能力
- 与打印机位于同一局域网，并已开启 **Developer Mode**
- Bambu Studio / OrcaSlicer 中建议开启 **Store sent files on external storage**

## 快速开始

### 方式一：Docker

如果宿主机已经安装 Docker，直接在仓库根目录执行：

```bash
docker compose up -d
```

构建源码镜像：

```bash
docker compose up -d --build
```

默认访问地址：

```text
http://localhost:8000
```

### 方式二：源码运行

下面这套流程已经在当前仓库环境里实际验证通过。

#### 1. 准备 Python 3.11 虚拟环境

如果系统自带 Python 版本过低，可以使用 `uv` 下载独立 Python：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"

uv python install 3.11
uv venv --python 3.11 .venv
source .venv/bin/activate
uv pip install -r requirements.txt
```

如果系统已经有符合要求的 Python，也可以直接：

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

#### 2. 安装 Node.js 依赖并构建前端

进入前端目录：

```bash
cd frontend
npm ci
npm run build
cd ..
```

说明：

- 前端构建产物会输出到仓库根目录的 `static/`
- 当前仓库已对 `npm run build` 做了兼容处理，在低兼容平台上也会显式带上 Node 内存参数
- 如果要把前端静态资源发布到 COS/CDN，可在构建前设置：

```bash
export VITE_ASSET_BASE="https://sysuzngcxy-1322240898.cos.ap-guangzhou.myqcloud.com/"
export VITE_PUBLIC_FILE_BASE_URL="https://sysuzngcxy-1322240898.cos.ap-guangzhou.myqcloud.com/"
cd frontend
npm run build
```

- `VITE_ASSET_BASE` 用于让首页加载 `assets/`、`img/`、`icons/` 等静态资源时优先走 COS
- `VITE_PUBLIC_FILE_BASE_URL` 用于让归档/模型库的缩略图、timelapse 等公开文件可直接从 COS 读取
- 如果要让这些文件可直接访问，需要把 Bambuddy 数据目录中的相对路径文件同步到 COS，并保持路径结构不变
- 打印机实时视频流属于动态流媒体，不适合直接放进 COS；当前公共相机帧会改为按请求由后端按需抓图，而不是持续上传到 COS

#### 3. 启动服务

```bash
source .venv/bin/activate
uvicorn backend.app.main:app --host 0.0.0.0 --port 8000
```

启动后访问：

```text
http://127.0.0.1:8000
```

健康检查：

```bash
curl http://127.0.0.1:8000/health
```

正常返回：

```json
{"status":"healthy"}
```

## 当前环境已验证结果

本仓库在以下环境已完成安装、构建和启动验证：

- 系统：`openEuler 22.03 (LTS-SP4)`
- 架构：`aarch64 / ARM64`
- Python：`3.11.15`（通过 `uv` 安装）
- Node.js：`20.20.2`
- npm：`10.8.2`
- ffmpeg：`4.2.4`

已确认通过的步骤：

- 后端依赖安装成功
- 前端 `npm ci` 成功
- 前端 `npm run build` 成功
- `uvicorn backend.app.main:app --host 127.0.0.1 --port 8000` 成功启动
- `/health` 返回 `{"status":"healthy"}`
- `/` 首页和 `/assets/...` 静态资源可正常访问

## 常用命令

安装后端依赖：

```bash
source .venv/bin/activate
uv pip install -r requirements.txt
```

重新构建前端：

```bash
cd frontend
npm run build
```

前端开发模式：

```bash
cd frontend
npm run dev
```

直接启动后端：

```bash
source .venv/bin/activate
uvicorn backend.app.main:app --host 0.0.0.0 --port 8000
```

## 注意事项

### 1. `DEBUG` 环境变量

某些系统环境会注入 `DEBUG=release` 之类的值。当前仓库已经兼容这类写法：

- `debug / dev / development` 会被识别为 `true`
- `release / prod / production` 会被识别为 `false`

### 2. `ffmpeg`

如果不安装 `ffmpeg`，基础页面通常仍能打开，但相机抓帧、延时摄影和部分视频处理功能会受影响。

### 3. Docker 主机网络

Linux 下如果你要自动发现打印机或使用部分相机/代理功能，通常需要保留 `docker-compose.yml` 里的 `network_mode: host`。

### 4. 数据位置

默认情况下：

- 数据库存放在仓库根目录或 `DATA_DIR` 指定目录
- 日志写入 `logs/`
- 前端静态文件位于 `static/`

## 测试与验证

本次本地配置过程中，额外做了两项验证：

- 新增配置解析测试：`backend/tests/unit/test_config_settings.py`
- 实际启动并访问：
  - `GET /health`
  - `GET /`
  - `GET /assets/index-*.js`

如需继续扩展功能，建议优先阅读：

- [README.md](./README.md)
- [install/README.md](./install/README.md)
- [docs/](./docs/)
