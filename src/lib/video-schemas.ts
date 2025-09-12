import { z } from 'zod'

export const videoGenerationSchema = z.object({
  prompt: z.string().min(10, 'Prompt must be at least 10 characters long').max(2000, 'Prompt must be less than 2000 characters'),
  style: z.enum(['cinematic', 'luxury', 'futuristic', 'organic', 'minimal', 'dramatic']),
  duration: z.number().min(10).max(30),
  quality: z.enum(['hd', '4k']).default('hd'),
  aspectRatio: z.enum(['16:9', '9:16', '1:1']).default('16:9')
})

export const videoStatusSchema = z.object({
  videoId: z.string().min(1, 'Video ID is required')
})

export const templateSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  prompt: z.string(),
  category: z.enum(['product', 'app', 'brand', 'social', 'marketing']),
  style: z.string(),
  duration: z.number()
})

export type VideoGenerationInput = z.infer<typeof videoGenerationSchema>
export type VideoStatusInput = z.infer<typeof videoStatusSchema>
export type TemplateInput = z.infer<typeof templateSchema>