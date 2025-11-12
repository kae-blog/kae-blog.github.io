/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // 這裡不需要自訂顏色，因為你用 :root CSS 變數
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 加入 .prose 樣式支援
  ],
}
