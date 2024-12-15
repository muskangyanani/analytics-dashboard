'use client'

import { useEffect, useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useToast } from "@/hooks/use-toast"

type UserGrowthChartProps = {
  period: 'daily' | 'weekly' | 'monthly'
}

export function UserGrowthChart({ period }: UserGrowthChartProps) {
  const [data, setData] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/user-growth?period=${period}`)
        const result = await response.json()
        setData(result)
        toast({
          title: "Data refreshed",
          description: "User growth data has been updated.",
        })
      } catch (error) {
        console.error('Error fetching user growth data:', error)
        toast({
          title: "Error",
          description: "Failed to fetch user growth data.",
          variant: "destructive",
        })
      }
    }

    fetchData()
  }, [period, toast])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Bar dataKey="users" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

