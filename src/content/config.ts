// 檔案路徑: src/content/config.ts (已修正語法，並加入所有欄位)

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    // --- 這是您原有的欄位 ---
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.array(z.string()),
    previewImage: z.string(),
    heroImage: z.string().optional(), 
    tags: z.array(z.string()).optional(),
    
    // --- 食譜相關欄位 (已修正逗號) ---
    isRecipe: z.boolean().optional(),
    recipeCategory: z.string().optional(),
    recipeIngredients: z.array(z.string()).optional(),
    recipeInstructions: z.array(z.string()).optional(),

    // --- ▼▼▼ 這是本次新加入的欄位 ▼▼▼ ---
    prepTime: z.string().optional(), // 準備時間
    cookTime: z.string().optional(), // 烹飪時間
    recipeCuisine: z.string().optional(), // 菜系
    draft: z.boolean().optional(), // 👈 新增：草稿狀態 (true = 隱藏)
  }), // 這裡關閉 z.object
}); // 這裡關閉 defineCollection

export const collections = {
  'blog': blogCollection,
};
