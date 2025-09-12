import { NextRequest, NextResponse } from 'next/server'

type Params = Promise<{ videoId: string }>

export async function GET(
  _request: NextRequest,
  { params }: { params: Params }
) {
  const { videoId: _videoId } = await params
  
  // For demo purposes, return a placeholder video URL
  // In production, this would serve the actual generated video file
  
  // Create a demo video response with appropriate headers
  const demoVideoResponse = new NextResponse(null, {
    status: 302,
    headers: {
      'Location': 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0381f51e-2877-47ae-9211-cbc20e0e387c.png',
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'video/mp4'
    }
  })
  
  return demoVideoResponse
}

export async function HEAD(
  _request: NextRequest,
  { params }: { params: Params }
) {
  await params
  return new NextResponse(null, {
    headers: {
      'Content-Type': 'video/mp4',
      'Content-Length': '5242880', // 5MB placeholder
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}