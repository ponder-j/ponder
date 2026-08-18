// 站点全局配置：个人网站的大部分文字都在这里改
// BASE_URL 在构建时由 Astro 根据 astro.config.mjs 里的 base 自动生成
export const BASE = import.meta.env.BASE_URL;

// 把站内路径拼上 base 前缀，保证部署到 GitHub Pages 子路径时链接不 404
export const withBase = (path: string) =>
  path === "/" ? BASE : `${BASE.replace(/\/$/, "")}${path}`;

export const SITE = {
  // 你的名字（显示在网站各处）
  name: "Ponder J",
  // 浏览器标签页标题
  title: "Ponder J 的个人网站",
  // 一句话介绍自己
  role: "开发者 · 学习者 · 生活记录者",
  // 首页 Hero 区的自我介绍，可以多写几句
  bio: "你好，我是 Ponder J。这里是我的个人网站，用来分享我的项目、想法和成长记录。",
  description:
    "Ponder J 的个人网站：关于我、我的项目与博客文章。",
  // 社交链接（改成你自己的）
  github: "https://github.com/ponder-j",
  email: "a2140316092@qq.com",
} as const;

export const NAV_LINKS = [
  { href: withBase("/"), label: "首页" },
  { href: withBase("/about"), label: "关于" },
  { href: withBase("/projects"), label: "项目" },
  { href: withBase("/blog"), label: "博客" },
] as const;
