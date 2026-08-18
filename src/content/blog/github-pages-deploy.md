---
title: "把网站免费挂到 GitHub Pages"
description: "一步步说明：如何把 Astro 网站构建后自动部署到 GitHub Pages。"
pubDate: 2026-08-18
tags: ["教程", "GitHub Pages", "Astro"]
---

GitHub Pages 可以为每个 GitHub 账号提供免费的静态网站托管。这篇文章记录我们的网站是如何配置自动部署的。

## 原理

整个流程是：

1. 代码推送到 GitHub 仓库；
2. GitHub Actions 自动运行 `npm run build`，生成 `dist/` 静态文件；
3. 通过官方 Actions 把 `dist/` 发布到 Pages；
4. 访问 `https://<用户名>.github.io/<仓库名>/` 即可看到网站。

## 需要准备

- 一个 GitHub 账号；
- 本项目的仓库已经推送到 GitHub；
- 在仓库的 **Settings → Pages** 里，把 Source 选为 **GitHub Actions**。

## 仓库的两种形态

- **用户站点**：仓库名叫 `<用户名>.github.io`，网站地址是 `https://<用户名>.github.io`；
- **项目站点**：任意仓库名，网站地址是 `https://<用户名>.github.io/<仓库名>`。

如果用的是项目站点，记得把 `astro.config.mjs` 里的 `base` 改成 `/仓库名/`，这样资源路径才不会出错。

## 推送即发布

配置好之后，每次 `git push` 到 `main` 分支，网站都会自动重新构建并发布，不需要手动操作。
