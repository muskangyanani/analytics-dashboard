import { ColumnDef } from "@tanstack/react-table"

export type HistoryData = {
  id: number
  date: string
  users: number
  revenue: number
  region: string
}

export const columns: ColumnDef<HistoryData>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "users",
    header: "Users",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("revenue"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "region",
    header: "Region",
  },
]

