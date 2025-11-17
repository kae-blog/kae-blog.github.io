// 檔案路徑: src/content/config.ts (已加入食譜新欄位)

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
    
    // --- 這是您上次加入的欄位 ---
    isRecipe: z.boolean().optional(),
    recipeCategory: z.string().optional(),
    recipeIngredients: z.array(z.string()).optional(),
    recipeInstructions: z.array(z.string()).optional(),

    // --- ▼▼▼ 這是本次新加入的欄位 ▼▼▼ ---
    prepTime: z.string().optional(), // 準備時間
    cookTime: z.string().optional(), // 烹飪時間
    recipeCuisine: z.string().optional(), // 菜系
  }),
});

export const collections = {
  'blog': blogCollection,
};
