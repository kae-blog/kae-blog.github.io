import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import tailwind from '@astrojs/tailwind'; // 👈 1. 加入這行 import

export default defineConfig({
  
  // 👇 2. 加入這個 integrations 區塊來啟用 Tailwind
  integrations: [
    tailwind()
  ],

  // 👇 3. 保留您原有的 vite 區塊 (修正 @src 問題)
  vite: {
    resolve: {
      alias: {
        '@src': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
