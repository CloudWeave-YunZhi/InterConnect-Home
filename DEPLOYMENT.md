# Vercel 部署指南

## 🚀 快速部署（推荐）

### 方法一：通过 Vercel 仪表板部署

1. **访问 Vercel**
   - 前往 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New" → "Project"
   - 从 GitHub 仓库列表中选择 `InterConnect-Home`
   - 点击 "Import"

3. **配置项目**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **部署**
   - 点击 "Deploy"
   - 等待 2-3 分钟完成部署
   - 获取生产环境 URL

5. **自动部署**
   - 每次推送到 `main` 分支，Vercel 会自动重新部署
   - Pull Request 会生成预览环境

---

## 🔧 方法二：使用 GitHub Actions 部署

### 1. 获取 Vercel Token

在 Vercel 仪表板：
1. Settings → Tokens
2. Create Token
3. 复制 Token（只显示一次）

### 2. 获取项目 ID

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录并关联项目
vercel login
cd InterConnect-Home
vercel link

# 查看项目信息
cat .vercel/project.json
```

你会看到：
```json
{
  "orgId": "team_xxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxx"
}
```

### 3. 配置 GitHub Secrets

在 GitHub 仓库：
1. Settings → Secrets and variables → Actions
2. 添加以下 secrets：
   - `VERCEL_TOKEN`: 你的 Vercel Token
   - `VERCEL_ORG_ID`: 从 `.vercel/project.json` 获取的 `orgId`
   - `VERCEL_PROJECT_ID`: 从 `.vercel/project.json` 获取的 `projectId`

### 4. 推送代码

```bash
git add .
git commit -m "Add Vercel deployment"
git push origin main
```

GitHub Actions 会自动：
- ✅ 检出代码
- ✅ 安装依赖
- ✅ 运行代码检查
- ✅ 构建项目
- ✅ 部署到 Vercel
- ✅ 输出部署 URL

---

## 📝 环境变量配置

如果项目需要环境变量，在 Vercel 仪表板配置：

1. Project Settings → Environment Variables
2. 添加变量：
   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   NODE_ENV=production
   ```

---

## 🌐 自定义域名

### 添加域名

1. Project Settings → Domains
2. 输入你的域名（例如：interconnect.example.com）
3. 按照提示配置 DNS 记录：

**A 记录方式：**
```
类型: A
名称: @
值: 76.76.21.21
```

**CNAME 方式：**
```
类型: CNAME
名称: www
值: cname.vercel-dns.com
```

4. 等待 DNS 生效（通常 5-10 分钟）

---

## 🔍 部署后验证

访问你的网站，检查：
- ✅ 所有页面正常加载
- ✅ 玻璃态效果显示正确
- ✅ 深色模式切换正常
- ✅ 响应式布局适配
- ✅ 动画效果流畅
- ✅ 字体正确渲染

---

## 📊 性能优化

Vercel 自动提供：
- ✅ 全球 CDN 加速
- ✅ 自动 SSL 证书
- ✅ 智能缓存
- ✅ 图片优化
- ✅ Edge Functions

---

## 🐛 常见问题

### 问题 1：构建失败
```bash
# 本地测试构建
npm run build

# 检查错误信息
npm run lint
```

### 问题 2：样式丢失
确保 `globals.css` 在 `layout.tsx` 中正确导入：
```typescript
import './globals.css'
```

### 问题 3：部署成功但页面空白
检查浏览器控制台错误，通常是：
- JavaScript 加载失败
- API 路径配置错误
- 环境变量缺失

---

## 📚 有用的命令

```bash
# 本地预览生产构建
npm run build
npm run start

# 查看 Vercel 部署日志
vercel logs

# 回滚到上一个部署
vercel rollback

# 查看所有部署
vercel list
```

---

## 🎉 部署成功！

你的 InterConnect 官网现在已经：
- 🌍 部署到全球 CDN
- 🔒 启用 HTTPS
- 🚀 自动优化性能
- 📱 完美支持移动端
- 🌓 深色模式就绪

---

**需要帮助？**
- [Vercel 文档](https://vercel.com/docs)
- [Next.js 部署指南](https://nextjs.org/docs/deployment)
