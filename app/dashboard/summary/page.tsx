import { Suspense } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserGrowthChart } from '@/components/UserGrowthChart'
import { RevenueTrendChart } from '@/components/RevenueTrendChart'
import { EngagementMetricsChart } from '@/components/EngagementMetricsChart'
import { SkeletonCard } from '@/components/SkeletonCard'

export default function SummaryPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Analytics Summary</h1>
      <Tabs defaultValue="daily" className="w-full">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Suspense fallback={<SkeletonCard />}>
              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                  <CardDescription>Daily new user registrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <UserGrowthChart period="daily" />
                </CardContent>
              </Card>
            </Suspense>
            <Suspense fallback={<SkeletonCard />}>
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Daily revenue data</CardDescription>
                </CardHeader>
                <CardContent>
                  <RevenueTrendChart period="daily" />
                </CardContent>
              </Card>
            </Suspense>
            <Suspense fallback={<SkeletonCard />}>
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>Daily user engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <EngagementMetricsChart period="daily" />
                </CardContent>
              </Card>
            </Suspense>
          </div>
        </TabsContent>
        <TabsContent value="weekly">
          {/* Similar structure as daily, but with weekly data */}
        </TabsContent>
        <TabsContent value="monthly">
          {/* Similar structure as daily, but with monthly data */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

