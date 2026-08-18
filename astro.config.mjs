import { defineConfig } from "astro/config";

// 部署配置：site 是你的 GitHub Pages 根地址，base 是仓库名
// 如果你的仓库叫 <用户名>.github.io（用户站点），把 base 改成 "/"
export default defineConfig({
  site: "https://ponder-j.github.io",
  base: "/ponder/",
});
