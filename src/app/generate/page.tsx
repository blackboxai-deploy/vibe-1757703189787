'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('cinematic')
  const [duration, setDuration] = useState([25])
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const templates = [
    {
      id: 'recipe-ebook',
      name: 'Recipe Ebook Showcase',
      description: 'Floating tablet with cookbook pages and 3D food elements',
      thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6dcd552b-2f62-4afe-a4bf-37c6e29f0523.png',
      prompt: 'High-end cinematic showcase of a digital recipe ebook. A sleek tablet floats in mid-air over a clean wooden table. Its screen glows open, revealing the cookbook cover with fresh fruits, vegetables, and clean typography. As the tablet rotates slowly, pages flip themselves, each page featuring a vibrant recipe photo with minimal ingredients beside it. Around the tablet, 3D food elements appear — avocado slices, berries, grilled salmon, smoothies, and quinoa bowls — orbiting in slow motion, then merging into the ebook visuals. Background is airy and bright with subtle depth-of-field bokeh.'
    },
    {
      id: 'app-showcase',
      name: 'Mobile App Demo',
      description: 'Floating phone with app interface and UI elements',
      thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/684d8dd5-0d51-4298-a74e-9520cec47d89.png',
      prompt: 'Cinematic mobile app showcase with a sleek smartphone floating in space. The phone screen glows with a modern app interface, pages transition smoothly with gesture animations. UI elements float around the device - buttons, icons, notifications, and data visualizations. The background features soft gradients with particle effects. Camera moves in smooth arcs around the device showing different app screens and features.'
    },
    {
      id: 'product-hero',
      name: 'Product Hero Video',
      description: 'Dramatic product reveal with cinematic lighting',
      thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aedcb3c6-1b69-40b5-be6c-924920167e26.png',
      prompt: 'Luxury product hero video with dramatic cinematic lighting. Product emerges from darkness with volumetric lighting beams. Camera circles the product in slow motion, highlighting premium materials and design details. Particles and light rays dance around the product. Background transitions from deep black to elegant gradient. Professional photography style with golden hour lighting and depth of field.'
    },
    {
      id: 'brand-story',
      name: 'Brand Storytelling',
      description: 'Emotional brand narrative with dynamic visuals',
      thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/444e7b46-3440-4fe7-b25d-213614a4be04.png',
      prompt: 'Emotional brand storytelling video with dynamic typography and abstract visuals. Text phrases appear and animate in elegant typography styles. Background features flowing organic shapes, color gradients, and subtle particle systems. Camera moves fluidly through different scenes representing brand values. Warm, inspiring lighting with cinematic color grading.'
    }
  ]

  const styles = [
    { id: 'cinematic', name: 'Cinematic', description: 'Professional film-like quality with depth and lighting' },
    { id: 'luxury', name: 'Luxury', description: 'Premium aesthetics with golden accents and elegant materials' },
    { id: 'futuristic', name: 'Futuristic', description: 'Modern tech-inspired with neon highlights and digital effects' },
    { id: 'organic', name: 'Organic', description: 'Natural, warm tones with soft lighting and organic shapes' },
    { id: 'minimal', name: 'Minimal', description: 'Clean, simple aesthetics with negative space and subtle elements' },
    { id: 'dramatic', name: 'Dramatic', description: 'High contrast lighting with bold shadows and intense atmosphere' }
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    setProgress(0)
    setGeneratedVideo(null)

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev
          return prev + Math.random() * 10
        })
      }, 500)

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          style,
          duration: duration[0],
        }),
      })

      clearInterval(progressInterval)
      setProgress(100)

      if (response.ok) {
        const data = await response.json()
        setGeneratedVideo(data.videoUrl)
      } else {
        console.error('Generation failed')
      }
    } catch (error) {
      console.error('Error generating video:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleTemplateSelect = (template: typeof templates[0]) => {
    setPrompt(template.prompt)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Create Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Cinematic Video
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose a template or create from scratch. Our AI will generate a stunning cinematic video in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Generation Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Templates */}
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Choose Template</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      className="group cursor-pointer"
                      onClick={() => handleTemplateSelect(template)}
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-3 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300">
                        <img
                          src={template.thumbnail}
                          alt={template.description}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-white font-medium mb-1">{template.name}</h3>
                      <p className="text-gray-400 text-sm">{template.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Parameters */}
            <Tabs defaultValue="prompt" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/5">
                <TabsTrigger value="prompt" className="text-white data-[state=active]:bg-purple-500/20">Prompt</TabsTrigger>
                <TabsTrigger value="style" className="text-white data-[state=active]:bg-purple-500/20">Style</TabsTrigger>
                <TabsTrigger value="settings" className="text-white data-[state=active]:bg-purple-500/20">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="prompt" className="space-y-4">
                <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-white">Video Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Describe your cinematic video in detail..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-32 bg-white/5 border-purple-500/20 text-white placeholder:text-gray-400"
                    />
                    <p className="text-sm text-gray-400 mt-2">
                      Be specific about lighting, camera movements, objects, and atmosphere for best results.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="style" className="space-y-4">
                <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-white">Visual Style</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {styles.map((styleOption) => (
                        <div
                          key={styleOption.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                            style === styleOption.id
                              ? 'border-purple-400 bg-purple-500/10'
                              : 'border-purple-500/20 hover:border-purple-400/40'
                          }`}
                          onClick={() => setStyle(styleOption.id)}
                        >
                          <h3 className="text-white font-medium mb-2">{styleOption.name}</h3>
                          <p className="text-gray-400 text-sm">{styleOption.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-white">Video Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-white mb-4 block">Duration: {duration[0]} seconds</Label>
                      <Slider
                        value={duration}
                        onValueChange={setDuration}
                        max={30}
                        min={10}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>10s</span>
                        <span>30s</span>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-white mb-2 block">Quality</Label>
                      <Select defaultValue="hd">
                        <SelectTrigger className="bg-white/5 border-purple-500/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-purple-500/20">
                          <SelectItem value="hd">HD (1080p)</SelectItem>
                          <SelectItem value="4k">4K (2160p)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Generate Button */}
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
              <CardContent className="p-6">
                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold disabled:opacity-50"
                >
                  {isGenerating ? 'Generating Video...' : 'Generate Cinematic Video'}
                </Button>
                
                {isGenerating && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Generating your video</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-gray-400 mt-2 text-center">
                      This may take 1-3 minutes depending on complexity...
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {generatedVideo ? (
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <video
                      ref={videoRef}
                      src={generatedVideo}
                      controls
                      className="w-full h-full"
                      autoPlay
                      muted
                    />
                  </div>
                ) : (
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                        🎬
                      </div>
                      <p className="text-gray-400">Your generated video will appear here</p>
                    </div>
                  </div>
                )}

                {generatedVideo && (
                  <div className="mt-4 space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                    >
                      Download Video
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                    >
                      Share
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">💡 Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-300">
                  <strong className="text-purple-400">Be Specific:</strong> Include details about lighting, camera movements, and atmosphere.
                </div>
                <div className="text-sm text-gray-300">
                  <strong className="text-purple-400">Use Templates:</strong> Start with a template and customize for faster results.
                </div>
                <div className="text-sm text-gray-300">
                  <strong className="text-purple-400">Style Matters:</strong> Choose the right visual style to match your brand.
                </div>
                <div className="text-sm text-gray-300">
                  <strong className="text-purple-400">Duration:</strong> Shorter videos (15-25s) often have better quality.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}