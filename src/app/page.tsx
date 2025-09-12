'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToEbookContents = () => {
    const ebookContentsSection = document.getElementById('ebook-contents')
    if (ebookContentsSection) {
      ebookContentsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }



  const features = [
    {
      title: 'Completely Free',
      description: 'Download our comprehensive recipe ebook at no cost - no hidden fees or subscriptions',
      icon: '💝',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Instant Download',
      description: 'Get immediate access to all recipes in high-quality PDF format on any device',
      icon: '⬇️',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: '20 Curated Recipes',
      description: 'Hand-picked, tested recipes with detailed step-by-step instructions for perfect results',
      icon: '👨‍🍳',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Nutritional Information',
      description: 'Complete calorie counts, macros, and health benefits for every single recipe',
      icon: '🥗',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Meal Planners Included',
      description: 'Complete weekly meal planning guides with organized grocery lists for easy shopping',
      icon: '📋',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mobile Friendly',
      description: 'Optimized for reading on phones, tablets, and e-readers - cook from anywhere',
      icon: '📱',
      gradient: 'from-pink-500 to-red-500'
    }
  ]

  const recipeCategories = [
    {
      name: 'Breakfast & Brunch',
      description: 'Energizing morning recipes to start your day right with healthy ingredients',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fad5e4c5-a49e-43f3-bc79-0b1365d96160.png',
      recipes: ['Avocado Toast Variations', 'Overnight Oats', 'Smoothie Bowls', 'Eggs Benedict'],
      recipeCount: '5 Recipes'
    },
    {
      name: 'Healthy Dinners',
      description: 'Wholesome dinner recipes that nourish your body and satisfy your taste buds',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d0724b63-f55a-4a89-b014-d1f476332120.png',
      recipes: ['Grilled Salmon', 'Quinoa Buddha Bowls', 'Roasted Vegetables', 'Mediterranean Chicken'],
      recipeCount: '8 Recipes'
    },
    {
      name: 'Fresh Salads & Sides',
      description: 'Vibrant salads and healthy sides packed with fresh ingredients',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa2bcfd6-3a22-42ed-b24a-af59874008f3.png',
      recipes: ['Rainbow Salads', 'Protein Bowls', 'Seasonal Greens', 'Quick Sides'],
      recipeCount: '4 Recipes'
    },
    {
      name: 'Meal Planning Tools',
      description: 'Complete meal planners and grocery lists to organize your weekly cooking',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/85708712-1acf-4f0d-9c0a-73c859c8a003.png',
      recipes: ['Weekly Meal Plans', 'Grocery List Templates', 'Prep Schedules', 'Healthy Snack Ideas'],
      recipeCount: '3 Snacks + Planners'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-6 py-2">
              📖 Free Digital Recipe Ebook
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 font-playfair leading-tight">
              Free Recipe
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Ebook Collection
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Download our carefully curated collection of 20 delicious, tested recipes absolutely free. 
              Includes complete meal planners and grocery lists to make your cooking journey effortless.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                onClick={() => console.log('Download ebook')}
              >
                ✅ Yes, Send Me The Free Ebook!
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-orange-500/50 text-orange-300 hover:bg-orange-500/10 px-8 py-4 text-lg font-semibold"
                onClick={scrollToEbookContents}
              >
                Show Me What's Inside
              </Button>
            </div>
            
            {/* Free Ebook Showcase */}
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-orange-500/20">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63249710-12de-4520-b2cc-f8eaa832d048.png" 
                  alt="Beautiful digital recipe ebook cover with fresh ingredients and modern typography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">20 Amazing Recipes</h3>
                    <p className="text-gray-200">Plus meal planners, grocery lists, and nutritional information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-bounce delay-300">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60" />
        </div>
        <div className="absolute top-3/4 right-10 animate-bounce delay-700">
          <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-bounce delay-1000">
          <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-60" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 px-6 py-2">
              🎁 Ebook Advantages
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Why You'll Love This
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
                Free Recipe Ebook
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive recipe ebook is packed with advantages - from tested recipes and nutritional guides 
              to shopping lists and mobile-friendly format, all completely free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Categories Section */}
      <section id="ebook-contents" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-6 py-2">
              📚 Ebook Contents
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              What's Inside Your
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                Free Recipe Ebook
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              20 carefully selected recipes plus complete meal planners and grocery lists organized into convenient categories with detailed instructions and nutritional information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {recipeCategories.map((category, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.description}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <Badge className="bg-orange-500/80 text-white text-sm">
                        {category.recipeCount}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-orange-400 font-semibold mb-3">Featured Recipes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="text-sm text-gray-300 flex items-center">
                          <span className="text-orange-400 mr-2">•</span>
                          {recipe}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold"
                    onClick={() => console.log('Download ebook')}
                  >
                    ✅ Yes, Send Me The Free Ebook!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Download Your Free
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
                Recipe Ebook Today!
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join over 50,000 home cooks who have already downloaded this comprehensive recipe collection. 
              Start creating delicious, healthy meals tonight!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              onClick={() => console.log('Download ebook')}
            >
              ✅ Yes, Send Me The Free Ebook Now! →
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}