# ✉️ 未来的信 - GitHub 配置指南

## 功能说明

"未来的信"板块使用 **GitHub Issues** 作为后端存储，同学们可以：
- 📝 写信给未来的自己或同学
- 💌 信件会保存在 GitHub Issues 中
- 👀 所有人都可以查看信件
- 💬 可以在 GitHub 上评论互动

## 配置步骤

### 第 1 步：创建 GitHub 仓库

1. 登录 GitHub (https://github.com)
2. 点击 "+" → "New repository"
3. 仓库名称：`class-website`（或你喜欢的名字）
4. 选择 **Public**（公开）
5. 勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 第 2 步：创建 "letter" 标签

1. 进入你的仓库
2. 点击 "Issues" → "Labels" → "New label"
3. 名称：`letter`
4. 颜色：选择一个喜欢的颜色（如 #6366f1）
5. 描述：`班级信件`
6. 点击 "Create label"

### 第 3 步：获取 GitHub Token（可选，用于提高 API 限制）

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 名称：`class-website-letter`
4. 勾选权限：`public_repo`
5. 点击 "Generate token"
6. **复制并保存 Token**（只显示一次！）

### 第 4 步：修改配置

打开 `future-letter.html` 文件，找到以下配置（约第 338 行）：

```javascript
const GITHUB_CONFIG = {
    owner: 'YOUR_GITHUB_USERNAME',  // 你的 GitHub 用户名
    repo: 'class-website',          // 你的仓库名称
    token: 'YOUR_GITHUB_TOKEN'      // 你的 GitHub Token（可选）
};
```

修改为：

```javascript
const GITHUB_CONFIG = {
    owner: 'your-username',         // 你的 GitHub 用户名
    repo: 'class-website',          // 你的仓库名称
    token: 'ghp_xxxxxxxxxxxx'       // 你的 Token（可选，但推荐）
};
```

### 第 5 步：部署到 GitHub Pages

1. 进入你的仓库
2. 点击 "Settings" → "Pages"
3. Source: 选择 "main" branch
4. 点击 "Save"
5. 等待几分钟，你的网站就会在 `https://your-username.github.io/class-website/` 上线

## 使用方式

### 本地模式（未配置 GitHub）
- 信件会保存在浏览器本地存储（localStorage）
- 只有当前用户可以看到
- 适合测试

### GitHub 模式（已配置）
- 信件会发布到 GitHub Issues
- 所有人都可以在 GitHub 上查看和评论
- 数据永久保存

## API 限制

| 模式 | 请求限制 |
|------|---------|
| 未认证 | 60 次/小时 |
| 有 Token | 5000 次/小时 |

## 常见问题

**Q: 为什么信件无法发送？**
A: 检查：
1. GitHub 用户名是否正确
2. 仓库是否存在且为公开
3. "letter" 标签是否创建
4. 如果使用 Token，检查 Token 是否有效

**Q: 如何删除不当内容？**
A: 在 GitHub Issues 中删除对应的 Issue 即可

**Q: 可以自定义样式吗？**
A: 可以，修改 `future-letter.html` 中的 CSS 样式

## 隐私说明

⚠️ **重要**：使用 GitHub Issues 意味着所有信件都是**公开**的。请提醒同学们：
- 不要分享个人隐私信息
- 内容适合公开浏览
- 遵守网络礼仪

## 进阶功能

如果需要私密信件或其他功能，可以考虑：
- 使用 GitHub Discussions
- 搭建自己的后端服务
- 使用第三方评论系统（如 Disqus、Gitalk）
