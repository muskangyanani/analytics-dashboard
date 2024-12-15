import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/dashboard/summary">Summary</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/history">History</Link>
        </Button>
      </div>
    </main>
  )
}

