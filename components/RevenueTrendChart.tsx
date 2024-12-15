'use client'

import { useEffect, useState } from 'react'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useToast } from "@/hooks/use-toast"

type RevenueTrendChartProps = {
  period: 'daily' | 'weekly' | 'monthly'
}

export function RevenueTrendChart({ period }: RevenueTrendChartProps) {
  const [data, setData] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/revenue-trend?period=${period}`)
        const result = await response.json()
        setData(result)
        toast({
          title: "Data refreshed",
          description: "Revenue trend data has been updated.",
        })
      } catch (error) {
        console.error('Error fetching revenue trend data:', error)
        toast({
          title: "Error",
          description: "Failed to fetch revenue trend data.",
          variant: "destructive",
        })
      }
    }

    fetchData()
  }, [period, toast])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}

