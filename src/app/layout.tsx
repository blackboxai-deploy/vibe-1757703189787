import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cinematic AI Video Generator | Professional Video Creation',
  description: 'Create stunning cinematic videos with AI. Transform your ideas into high-end promotional videos, product showcases, and marketing content.',
  keywords: ['AI video generation', 'cinematic videos', 'video creation', 'marketing videos', 'product showcase'],
  authors: [{ name: 'Cinematic AI' }],
  openGraph: {
    title: 'Cinematic AI Video Generator',
    description: 'Create stunning cinematic videos with AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable)}>
      <head>


      </head>
      <body className={cn(
        "min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 font-sans antialiased",
        "selection:bg-orange-200 selection:text-orange-900"
      )}>
        <div className="relative min-h-screen">
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 pointer-events-none" />
          
          {/* Floating orbs for ambient lighting */}
          <div className="fixed top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="fixed bottom-20 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-500 pointer-events-none" />
          
          {/* Content */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}