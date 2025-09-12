export interface VideoGenerationRequest {
  prompt: string
  style: 'cinematic' | 'luxury' | 'futuristic' | 'organic' | 'minimal' | 'dramatic'
  duration: number
  quality?: 'hd' | '4k'
  aspectRatio?: '16:9' | '9:16' | '1:1'
}

export interface VideoGenerationResponse {
  success: boolean
  videoId: string
  videoUrl: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  prompt: string
  metadata: {
    style: string
    duration: number
    quality: string
    generated_at: string
  }
  error?: string
}

export interface VideoTemplate {
  id: string
  name: string
  description: string
  thumbnail: string
  prompt: string
  category: 'product' | 'app' | 'brand' | 'social' | 'marketing'
  style: string
  duration: number
}

export interface VideoStyle {
  id: string
  name: string
  description: string
  previewImage?: string
  characteristics: string[]
}

export interface GenerationProgress {
  videoId: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  progress: number
  currentStep: string
  estimatedTimeRemaining?: number
  error?: string
}