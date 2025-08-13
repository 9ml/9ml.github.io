// server.ts
import { serveDir } from "https://deno.land/std@0.192.0/http/file_server.ts";

Deno.serve(async (req) => {
  const res = await serveDir(req, {
    // 静态文件的根目录
    fsRoot: `${Deno.cwd()}/docs`,
    // URL 路径前缀, 默认为空
    // 例如设为 "assets" 后, 访问 `/assets/file.js` 会映射到 `./dist/file.js`
    urlRoot: "",
    // 是否显示目录列表 默认 false 若为 true，访问目录时会显示文件列表（类似 nginx autoindex）
    showDirListing: false,
    // 是否启用 CORS 默认 false 若为 true，会添加 `Access-Control-Allow-Origin: *` 头
    enableCors: true
  });

  if (res.status === 404) {
    // 返回自定义 404 页面
    const notFoundPage = await Deno.readTextFile(`${Deno.cwd()}/docs/404.html`);
    return new Response(notFoundPage, {
      status: 404,
      headers: { "Content-Type": "text/html" },
    });
  }

  return res
});
