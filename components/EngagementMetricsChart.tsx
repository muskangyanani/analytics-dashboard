'use client'

import { useToast } from "@/hooks/use-toast"
import { useEffect, useState } from 'react'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

type EngagementMetricsChartProps = {
  period: 'daily' | 'weekly' | 'monthly'
}

export function EngagementMetricsChart({ period }: EngagementMetricsChartProps) {
  const [data, setData] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/engagement-metrics?period=${period}`)
        const result = await response.json()
        setData(result)
        toast({
          title: "Data refreshed",
          description: "Engagement metrics data has been updated.",
        })
      } catch (error) {
        console.error('Error fetching engagement metrics data:', error)
        toast({
          title: "Error",
          description: "Failed to fetch engagement metrics data.",
          variant: "destructive",
        })
      }
    }

    fetchData()
  }, [period, toast])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Area type="monotone" dataKey="engagement" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

