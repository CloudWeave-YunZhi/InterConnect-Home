# InterConnect 官网

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/InterConnect-Home)

一个基于 **Apple-Class 设计系统**的现代化 InterConnect 项目官网。

## ✨ 在线预览

- 🌐 **生产环境**: [https://interconnect.vercel.app](https://interconnect.vercel.app)
- 🎨 **设计系统**: Apple-Class Design System

## 🎨 设计系统特性

### 颜色系统
- **纯白背景**: `#FFFFFF` (浅色模式)
- **深炭灰文字**: `#171717` (9% 灰)
- **Apple 蓝强调色**: `#007AFF` (211° 100% 50%)
- **次要背景**: `#F5F5F5` (96% 灰)
- **完整深色模式**: 自动主题切换 + localStorage 持久化

### 字体系统
- **Display**: `clamp(36px, 5vw, 80px)` - 超大标题
- **Headline**: `clamp(28px, 4vw, 48px)` - 章节标题
- **Title**: `clamp(18px, 2.5vw, 24px)` - 卡片标题
- **Body**: `clamp(14px, 2vw, 18px)` - 正文
- **中文字体**: PingFang SC, Hiragino Sans GB, Microsoft YaHei

### 布局系统
- **8px 网格**: 所有间距为 8 的倍数
- **容器最大宽度**: 1200px
- **桌面端边距**: 24px
- **移动端边距**: 16px

### 玻璃态设计
- **背景模糊**: `backdrop-filter: blur(20px) saturate(180%)`
- **透明度**: 72% 半透明
- **边框圆角**: 16px (卡片) / 12px (按钮)
- **Hover 效果**: 向上移动 2px + 加深阴影

### 动画系统
- **缓动函数**: `cubic-bezier(0.4, 0.0, 0.2, 1)` (iOS 标准)
- **渐显动画**: 透明度 0→1 + translateY 8px→0
- **持续时间**: 0.6s (渐显) / 0.2s (交互)
- **无障碍**: 支持 `prefers-reduced-motion`

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
访问 **http://localhost:3000**

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 📦 部署到 Vercel

### 方法 1：一键部署（最简单）

点击下方按钮一键部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/InterConnect-Home)

### 方法 2：通过 Vercel 仪表板

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 登录
3. 导入此仓库
4. 点击部署

详细步骤请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 方法 3：使用 GitHub Actions

配置 GitHub Secrets 后，每次推送到 `main` 分支会自动部署。

查看 [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

## 📁 项目结构

```
InterConnect-Home/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署
├── src/
│   ├── app/
│   │   ├── globals.css         # Apple-Class 设计系统
│   │   ├── layout.tsx          # 根布局 + SEO
│   │   └── page.tsx            # 首页
│   └── components/
│       ├── Navigation.tsx      # 导航栏 + 主题切换
│       ├── Hero.tsx            # Hero 区块
│       ├── Features.tsx        # 功能展示
│       ├── QuickStart.tsx      # 快速开始
│       ├── Documentation.tsx   # 文档链接
│       ├── Footer.tsx          # 页脚
│       ├── GlassCard.tsx       # 玻璃卡片组件
│       ├── GlassButton.tsx     # 玻璃按钮组件
│       └── ThemeToggle.tsx     # 主题切换器
├── vercel.json                 # Vercel 配置
├── DEPLOYMENT.md               # 部署详细指南
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS + CSS Variables
- **设计系统**: Apple-Class Design System
- **部署**: Vercel
- **CI/CD**: GitHub Actions

## 🎯 页面区块

1. **Navigation** - 固定顶部玻璃导航栏
2. **Hero** - 大标题 + 渐变文字 + CTA 按钮
3. **Features** - 6 个功能卡片网格
4. **Quick Start** - 4 步安装指南
5. **Documentation** - 4 个文档分类
6. **Footer** - 多列页脚 + 社交链接

## 🎨 设计原则

✨ **极致简约** - 去除所有不必要的元素
✨ **功能优先** - 每个元素都有明确目的
✨ **用户友好** - 直觉式操作体验
✨ **精确美学** - 像素级完美对齐
✨ **情感反馈** - 微妙但有意义的交互

## 📱 响应式设计

- **移动端**: 16px 边距，堆叠布局，44px 触摸目标
- **平板**: 24px 边距，2 列网格
- **桌面**: 24px 边距，3 列网格，1200px 最大宽度

## 🌓 深色模式

- 自动检测系统偏好
- localStorage 持久化
- 一键手动切换
- 所有组件完美适配

## 🔧 可用命令

```bash
npm run dev     # 开发服务器（端口 3000）
npm run build   # 生产构建
npm run start   # 启动生产服务器
npm run lint    # 代码检查
```

## 📄 许可证

MIT License

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- **项目**: InterConnect
- **设计系统**: Apple-Class Design System
- **GitHub**: [InterConnect-Home](https://github.com/yourusername/InterConnect-Home)

---

**使用 Apple-Class 设计系统构建** ✨

开发服务器运行在: http://localhost:3001
