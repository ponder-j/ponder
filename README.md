# 我的个人网站

基于 [Astro](https://astro.build) 构建的个人网站，静态输出、默认零 JavaScript，自动部署到 GitHub Pages。

## 技术栈

- [Astro](https://astro.build) — 内容优先的静态站点框架
- Markdown — 博客文章写作
- 原生 CSS — 零 UI 框架依赖，支持深色模式
- GitHub Actions + GitHub Pages — 自动化构建部署

## 本地开发

```bash
npm install
npm run dev        # 打开 http://localhost:4321/my_github_website/
```

构建生产版本：

```bash
npm run build      # 输出到 dist/
npm run preview    # 本地预览构建产物
```

## 自定义内容

几乎所有文字都集中在一个地方，方便修改：

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名、简介、社交链接 | `src/config.ts` |
| 首页 / 关于页文案 | `src/pages/index.astro`、`src/pages/about.astro` |
| 项目列表 | `src/pages/projects.astro` |
| 写新文章 | 在 `src/content/blog/` 下新建 `.md` 文件 |
| 站点标题、favicon | `src/layouts/BaseLayout.astro`、`src/assets/favicon.svg` |
| 颜色、字体、间距 | `src/styles/global.css` |

写文章示例（`src/content/blog/hello-world.md` 就是模板）：

```md
---
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-08-18
tags: ["标签一", "标签二"]
draft: false   # 改成 true 可暂时不发布
---

正文，支持标准 Markdown。
```

## 部署到 GitHub Pages

### 1. 创建 GitHub 仓库并推送

在 GitHub 网页上新建仓库（仓库名建议用 `my_github_website`，与本地一致），然后：

```bash
git remote add origin https://github.com/<你的用户名>/my_github_website.git
git branch -M main
git push -u origin main
```

### 2. 开启 GitHub Pages

仓库 **Settings → Pages** → **Source** 选择 **GitHub Actions**，保存即可。

之后每次 `git push` 到 `main`，网站都会自动构建并发布。

### 3. 访问地址

- 项目站点：`https://<你的用户名>.github.io/my_github_website/`
- 用户站点：如果你想用 `https://<你的用户名>.github.io` 作为主地址，把仓库改名为 `<你的用户名>.github.io`，并把 `astro.config.mjs` 里的 `base` 改成 `"/"`。

> 推送前记得把 `astro.config.mjs` 里的占位符 `<你的GitHub用户名>` 换成真实的用户名。

## 目录结构

```
.
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── public/                        # 静态资源（暂无内容）
├── src/
│   ├── assets/                    # favicon 等资源
│   ├── components/                # 导航、页脚、卡片组件
│   ├── content/
│   │   └── blog/                  # Markdown 文章
│   ├── layouts/                   # 页面布局
│   ├── pages/                     # 首页、关于、项目、博客
│   ├── styles/global.css          # 全局样式
│   ├── config.ts                  # 站点配置
│   └── content.config.ts          # 内容集合定义
├── astro.config.mjs
└── package.json
```
