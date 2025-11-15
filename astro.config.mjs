import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; // 👈 (新) 1. 載入 sitemap 套件

export default defineConfig({
  
  // 👇 (新) 2. 填入您網站的完整網址 (非常重要！)
  site: 'https://kae-blog.github.io', 

  // 👇 3. 在 integrations 中同時啟用 tailwind 和 sitemap
  integrations: [
    tailwind(),
    sitemap() // 👈 (新) 加入 sitemap()
  ],

  // 👇 4. 保留您原有的 vite 區塊 (修正 @src 問題)
  vite: {
    resolve: {
      alias: {
        '@src': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
