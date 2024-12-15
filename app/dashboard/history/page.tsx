'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DataTable } from '@/components/DataTable'
import { columns } from '@/components/columns'

export default function HistoryPage() {
  const [sortBy, setSortBy] = useState('date')
  const [filterRegion, setFilterRegion] = useState('all')

  // In a real application, you would fetch this data from an API
  const data = [
    { id: 1, date: '2023-01-01', users: 100, revenue: 1000, region: 'North America' },
    { id: 2, date: '2023-01-02', users: 120, revenue: 1200, region: 'Europe' },
    // ... more data
  ]

  const filteredData = data.filter(item => filterRegion === 'all' || item.region === filterRegion)
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sortBy === 'users') return b.users - a.users
    if (sortBy === 'revenue') return b.revenue - a.revenue
    return 0
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Analytics History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Historical Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Select onValueChange={setSortBy} defaultValue={sortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="users">Users</SelectItem>
                <SelectItem value="revenue">Revenue</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setFilterRegion} defaultValue={filterRegion}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="North America">North America</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DataTable columns={columns} data={sortedData} />
        </CardContent>
      </Card>
    </div>
  )
}

