import { VideoTemplate } from '@/types/video'

export const videoTemplates: VideoTemplate[] = [
  {
    id: 'recipe-ebook',
    name: 'Recipe Ebook Showcase',
    description: 'Floating tablet with cookbook pages and 3D food elements orbiting around',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8dd6bf12-654f-4a03-bd4d-53a5fe8456b3.png',
    prompt: 'High-end cinematic showcase of a digital recipe ebook. A sleek tablet floats in mid-air over a clean wooden table. Its screen glows open, revealing the cookbook cover with fresh fruits, vegetables, and clean typography. As the tablet rotates slowly, pages flip themselves, each page featuring a vibrant recipe photo with minimal ingredients beside it. Around the tablet, 3D food elements appear — avocado slices, berries, grilled salmon, smoothies, and quinoa bowls — orbiting in slow motion, then merging into the ebook visuals. Background is airy and bright with subtle depth-of-field bokeh.',
    category: 'product',
    style: 'cinematic',
    duration: 25
  },
  {
    id: 'mobile-app-demo',
    name: 'Mobile App Demo',
    description: 'Floating smartphone with app interface and UI elements dancing around',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f2520740-7d1c-4c78-83ef-476b13dbaa18.png',
    prompt: 'Cinematic mobile app showcase with a sleek smartphone floating elegantly in space. The phone screen glows with a modern app interface, pages transition smoothly with natural gesture animations. UI elements float around the device in choreographed motion - buttons, icons, notifications, charts, and data visualizations orbit the phone. The background features soft gradients with subtle particle effects. Camera moves in smooth arcs around the device, revealing different app screens and key features with each rotation.',
    category: 'app',
    style: 'futuristic',
    duration: 20
  },
  {
    id: 'luxury-product-hero',
    name: 'Luxury Product Hero',
    description: 'Dramatic product reveal with premium lighting and golden accents',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/340e789c-3b3d-44dc-8e87-8b04b9ab092f.png',
    prompt: 'Luxury product hero video with dramatic cinematic lighting. Product emerges gracefully from darkness with volumetric lighting beams creating atmosphere. Camera circles the product in slow motion, highlighting premium materials, textures, and exquisite design details. Golden particles and light rays dance around the product like magical dust. Background transitions from deep elegant black to sophisticated gradient. Professional photography style with golden hour lighting, perfect depth of field, and crystal-clear focus on craftsmanship.',
    category: 'product',
    style: 'luxury',
    duration: 30
  },
  {
    id: 'brand-storytelling',
    name: 'Brand Storytelling',
    description: 'Emotional brand narrative with dynamic typography and flowing visuals',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69b608a1-a9ee-4e3e-8550-35523cbb31ec.png',
    prompt: 'Emotional brand storytelling video with dynamic typography and abstract flowing visuals. Elegant text phrases appear and animate in sophisticated typography styles, each word building the brand narrative. Background features organic flowing shapes, smooth color gradients, and subtle particle systems that respond to the story rhythm. Camera moves fluidly through different atmospheric scenes representing core brand values. Warm, inspiring lighting with premium color grading creates emotional connection.',
    category: 'brand',
    style: 'organic',
    duration: 25
  },
  {
    id: 'social-content-creator',
    name: 'Social Content Creator',
    description: 'Dynamic social media content with trendy effects and quick cuts',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49e59c92-59d5-4bb9-8531-519301b51067.png',
    prompt: 'High-energy social media content video with trendy visual effects. Multiple elements appear and disappear with snappy transitions - phones showing different social posts, floating like buttons, share icons, and engagement metrics. Vibrant neon colors and gradients create energetic atmosphere. Quick camera movements and zoom effects keep viewers engaged. Background pulses with rhythm, featuring geometric patterns and modern design elements perfect for social platforms.',
    category: 'social',
    style: 'futuristic',
    duration: 15
  },
  {
    id: 'corporate-presentation',
    name: 'Corporate Presentation',
    description: 'Professional business presentation with clean graphics and data visualization',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a114b55c-3658-4c21-847d-25bd34ac7404.png',
    prompt: 'Professional corporate presentation video with clean, minimal aesthetics. Charts, graphs, and data visualizations float elegantly in 3D space, transforming smoothly between different business metrics. Corporate elements like laptops, documents, and office environments blend seamlessly. Color palette focuses on professional blues and whites. Camera movements are smooth and purposeful, highlighting key information with subtle zoom effects. Background features subtle geometric patterns and clean gradients.',
    category: 'marketing',
    style: 'minimal',
    duration: 20
  },
  {
    id: 'fitness-app-showcase',
    name: 'Fitness App Showcase',
    description: 'Energetic fitness app demo with workout elements and health metrics',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/95f5f7de-252f-4c24-a90f-1e125acbfccb.png',
    prompt: 'Dynamic fitness app showcase with high energy and movement. Smartphone displays workout interfaces while 3D fitness elements orbit around - dumbbells, water bottles, running shoes, heart rate monitors. Health metrics and progress charts animate in and out of view. Vibrant, energetic colors with orange and green accents. Camera moves with athletic fluidity, creating sense of motion and vitality. Background features subtle gym environment with motivational lighting.',
    category: 'app',
    style: 'dramatic',
    duration: 25
  },
  {
    id: 'e-commerce-product',
    name: 'E-commerce Product',
    description: 'Product showcase for online stores with multiple angles and features',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a4da9d0e-ad7f-474d-92f5-2da4ba81151a.png',
    prompt: 'E-commerce product video showcasing item from multiple angles with commercial appeal. Product rotates smoothly in clean studio environment, revealing key features and details. Shopping elements like price tags, star ratings, and add-to-cart buttons appear dynamically. Multiple product variants show in sequence with smooth transitions. Professional photography lighting highlights product quality. Background remains clean and minimal to focus attention on the product itself.',
    category: 'product',
    style: 'minimal',
    duration: 20
  }
]

export const getTemplateById = (id: string): VideoTemplate | undefined => {
  return videoTemplates.find(template => template.id === id)
}

export const getTemplatesByCategory = (category: string): VideoTemplate[] => {
  return videoTemplates.filter(template => template.category === category)
}

export const getTemplatesByStyle = (style: string): VideoTemplate[] => {
  return videoTemplates.filter(template => template.style === style)
}

export const getFeaturedTemplates = (): VideoTemplate[] => {
  return videoTemplates.slice(0, 4) // Return first 4 as featured
}