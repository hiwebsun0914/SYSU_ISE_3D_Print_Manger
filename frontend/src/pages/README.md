# Pages 目录说明

本目录包含 BambuBuddy 前端应用的所有页面组件。每个文件负责渲染应用中的特定页面或功能模块。

## 📄 文件功能说明

### 核心页面

#### [LoginPage.tsx](LoginPage.tsx)
**登录页面**
- 用户身份验证界面
- 支持用户名/密码登录
- 处理登录表单提交和错误显示
- 重定向已认证用户

#### [SetupPage.tsx](SetupPage.tsx)
**初始设置页面**
- 首次运行时的应用配置向导
- 引导用户完成初始设置流程
- 配置基本系统参数

### 打印机管理

#### [PrintersPage.tsx](PrintersPage.tsx)
**打印机管理页面**
- 显示所有已连接的 Bambu Lab 打印机列表
- 查看打印机状态（空闲、打印中、离线等）
- 添加、编辑和删除打印机配置
- 实时监控打印机状态和进度

#### [CameraPage.tsx](CameraPage.tsx)
**摄像头监控页面**
- 实时查看打印机摄像头画面
- 支持多打印机摄像头切换
- 提供全屏查看模式
- 显示打印进度和状态信息

#### [StreamOverlayPage.tsx](StreamOverlayPage.tsx)
**直播叠加层页面**
- 为 OBS 等直播软件提供透明叠加层
- 显示打印进度、温度等实时信息
- 可自定义显示内容和样式
- 适用于直播和录制场景

### 打印任务管理

#### [QueuePage.tsx](QueuePage.tsx)
**打印队列页面**
- 管理待打印任务队列
- 支持拖拽排序任务优先级
- 批量编辑队列项设置
- 查看任务状态（待处理、打印中、已完成、失败）
- 分配任务到特定打印机
- 配置打印参数（手动启动、自动关机等）

#### [ArchivesPage.tsx](ArchivesPage.tsx)
**打印历史归档页面**
- 浏览所有历史打印记录
- 按状态、日期、打印机筛选
- 查看打印详情（耗材、时间、成本）
- 重新打印历史任务
- 导出打印数据

### 项目管理

#### [ProjectsPage.tsx](ProjectsPage.tsx)
**项目管理页面**
- 创建和管理 3D 打印项目
- 设置项目目标（打印数量、零件数量）
- 跟踪项目进度和完成状态
- 关联打印任务到项目
- 查看项目统计（耗材、成本、时间）
- 支持项目模板和子项目

#### [ProjectDetailPage.tsx](ProjectDetailPage.tsx)
**项目详情页面**
- 查看单个项目的完整信息
- 显示项目进度条和统计数据
- 管理项目物料清单（BOM）
- 查看项目时间线和历史记录
- 编辑项目笔记和文档
- 关联文件管理器文件夹
- 导出项目数据

### 耗材管理

#### [InventoryPage.tsx](InventoryPage.tsx)
**耗材库存页面**
- 管理所有耗材线轴库存
- 记录耗材信息（品牌、材料、颜色、重量）
- 跟踪耗材使用量和剩余量
- 低库存警告
- 支持表格和卡片视图
- 耗材分组和筛选功能
- 集成 Spoolman 外部库存系统

### SpoolBuddy 功能

#### [spoolbuddy/SpoolBuddyDashboard.tsx](spoolbuddy/SpoolBuddyDashboard.tsx)
**SpoolBuddy 仪表板**
- SpoolBuddy 功能的主控制面板
- 显示耗材管理概览
- 快速访问各项 SpoolBuddy 功能

#### [spoolbuddy/SpoolBuddyInventoryPage.tsx](spoolbuddy/SpoolBuddyInventoryPage.tsx)
**SpoolBuddy 库存页面**
- 高级耗材库存管理
- 支持 RFID/NFC 标签读写
- 自动识别耗材信息

#### [spoolbuddy/SpoolBuddyWriteTagPage.tsx](spoolbuddy/SpoolBuddyWriteTagPage.tsx)
**SpoolBuddy 标签写入页面**
- 写入 RFID/NFC 标签到耗材线轴
- 编码耗材信息到标签
- 支持 Bambu Lab 标准标签格式

#### [spoolbuddy/SpoolBuddyAmsPage.tsx](spoolbuddy/SpoolBuddyAmsPage.tsx)
**SpoolBuddy AMS 管理页面**
- 管理自动换料系统（AMS）中的耗材
- 查看 AMS 槽位状态
- 分配耗材到 AMS 槽位

#### [spoolbuddy/SpoolBuddyCalibrationPage.tsx](spoolbuddy/SpoolBuddyCalibrationPage.tsx)
**SpoolBuddy 校准页面**
- 耗材流量校准
- K 值校准管理
- 压力提前（PA）参数调整

#### [spoolbuddy/SpoolBuddySettingsPage.tsx](spoolbuddy/SpoolBuddySettingsPage.tsx)
**SpoolBuddy 设置页面**
- 配置 SpoolBuddy 功能参数
- RFID 读写器设置
- 耗材数据库配置

### 文件管理

#### [FileManagerPage.tsx](FileManagerPage.tsx)
**文件管理器页面**
- 浏览和管理 3D 模型文件
- 文件夹组织和分类
- 上传、下载、删除文件
- 文件预览和缩略图
- 关联文件到项目
- 支持外部文件夹链接
- 批量操作（移动、删除）

#### [OnlineSlicerPage.tsx](OnlineSlicerPage.tsx)
**在线切片器页面**
- 集成 Bambu Studio 在线切片器
- 直接在浏览器中切片 3D 模型
- 导入切片结果到文件管理器
- 支持从文件管理器打开模型

#### [KiriMotoPage.tsx](KiriMotoPage.tsx)
**Orca Slicer 在线切片器页面**
- 集成 Orca Slicer 在线切片器（使用 Kiri:Moto 框架）
- 支持嵌入式和外部窗口两种模式
- 自动加载 STL 文件到切片器
- 通过 Kiri:Moto bridge API 与切片器通信
- 提供文件下载和切片配置功能

### 切片配置

#### [ProfilesPage.tsx](ProfilesPage.tsx)
**切片配置文件页面**
- 管理 Bambu Studio 切片配置
- 云端配置同步
- 导入/导出配置文件
- K 值配置管理
- 打印机、耗材、工艺配置

### 统计与分析

#### [StatsPage.tsx](StatsPage.tsx)
**统计分析页面**
- 打印统计数据可视化
- 成功率分析
- 耗材使用趋势
- 打印时间统计
- 成本分析
- 打印机使用率
- 可自定义时间范围和图表

### 维护管理

#### [MaintenancePage.tsx](MaintenancePage.tsx)
**维护管理页面**
- 打印机维护计划管理
- 维护任务提醒（润滑、清洁、更换部件）
- 基于打印时间或日历的维护间隔
- 维护历史记录
- 自定义维护任务类型
- 每台打印机的维护状态跟踪

### 通知管理

#### [NotificationsPage.tsx](NotificationsPage.tsx)
**通知设置页面**
- 配置用户邮件通知偏好
- 设置打印事件通知（开始、完成、失败、停止）
- 管理通知接收设置
- 需要启用高级认证和 SMTP 配置

### 系统管理

#### [SettingsPage.tsx](SettingsPage.tsx)
**系统设置页面**
- 应用程序全局配置
- 网络设置（MQTT、Home Assistant）
- 智能插座管理
- 通知提供商配置
- 耗材管理设置（Spoolman 集成）
- API 密钥管理
- 虚拟打印机设置
- 用户和权限管理
- 备份和恢复设置
- 主题和界面定制

#### [SystemInfoPage.tsx](SystemInfoPage.tsx)
**系统信息页面**
- 查看系统资源使用情况（CPU、内存、磁盘）
- 数据库统计信息
- 已连接打印机状态
- 应用版本和运行时间
- 存储空间分析
- 支持和故障排除工具
- 调试日志查看器
- 下载支持包

#### [UsersPage.tsx](UsersPage.tsx)
**用户管理页面**
- 创建和管理用户账户
- 分配用户角色和权限
- 用户组管理
- 密码重置
- 需要启用高级认证功能

### 用户组管理

#### [GroupEditPage.tsx](GroupEditPage.tsx)
**用户组编辑页面**
- 创建和编辑用户组
- 配置组权限
- 管理组成员
- 权限分类和搜索

### 外部链接

#### [ExternalLinkPage.tsx](ExternalLinkPage.tsx)
**外部链接页面**
- 在应用内嵌入外部网页
- 通过 iframe 显示自定义链接
- 支持在设置中配置外部工具链接

## 🎨 页面分类

### 核心功能
- 打印机管理、队列管理、历史记录

### 项目管理
- 项目组织、进度跟踪、成本核算

### 耗材管理
- 库存跟踪、SpoolBuddy 集成、RFID 标签

### 文件与切片
- 文件管理、在线切片、配置管理

### 监控与分析
- 摄像头监控、统计分析、维护管理

### 系统配置
- 设置、用户管理、系统信息

## 🔗 页面路由

所有页面通过 React Router 进行路由管理，路由配置位于主应用组件中。每个页面都可以通过侧边栏导航或直接 URL 访问。

## 🛠️ 技术栈

- **React** - UI 框架
- **TypeScript** - 类型安全
- **React Query** - 数据获取和缓存
- **React Router** - 路由管理
- **Lucide React** - 图标库
- **Tailwind CSS** - 样式框架
- **i18next** - 国际化支持

## 📝 开发规范

- 每个页面组件都是独立的功能模块
- 使用 React Hooks 进行状态管理
- 通过 API 客户端与后端通信
- 支持权限控制和用户认证
- 响应式设计，支持移动端和桌面端
