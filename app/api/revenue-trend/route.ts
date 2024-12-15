import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const period = searchParams.get('period')

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Generate mock data based on the period
  const data = Array.from({ length: period === 'monthly' ? 12 : 30 }, (_, i) => ({
    date: `2023-${(i + 1).toString().padStart(2, '0')}-01`,
    revenue: Math.floor(Math.random() * 10000) + 5000,
  }))

  return NextResponse.json(data)
}

