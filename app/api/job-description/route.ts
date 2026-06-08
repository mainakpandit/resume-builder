import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { jobDescription } = body

  console.log('Job description received:', jobDescription)

  // TODO: replace with actual resume generation
  const resume = `Resume generated for the following role:\n\n${jobDescription}`

  return NextResponse.json({ resume })
}
