import { Checkbox } from "@radix-ui/react-checkbox"
import { ColumnDef } from "@tanstack/react-table"
// import { Payment } from "./data-table"
import { Item } from "@/lib/types"
import { ArrowUpDown, Download } from "lucide-react"
import { Button } from "./ui/button"
import { generateSingleCSV } from "@/lib/zip"



export const columns: ColumnDef<Item>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header:() => <div className="text-right">Download PDF</div>,
    cell: ({ row }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => generateSingleCSV(row.index)}
        >
          
          <Download/>
        </Button>
      )
    },
  },
  {
    accessorKey: "awb",
    header: "AWB",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("awb")}</div>
    ),
  },
  {
    accessorKey: "cid",
    header: "Client Order ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("cid")}</div>
    ),
  },
  {
    accessorKey: "Order_Creation_Date",
    header: "Order Creation Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Order_Creation_Date")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "pincode",
    header: "Pincode",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("pincode")}</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "Payment_Mode",
    header: "Payment Mode",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Payment_Mode")}</div>
    ),
  },
  {
    accessorKey: "codamount",
    header: "COD Amount",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "Delivery_Center_Name",
    header: "Delivery Center Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Delivery_Center_Name")}</div>
    ),
  },
  {
    accessorKey: "Courier_Partner",
    header: "Courier Partner",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Courier_Partner")}</div>
    ),
  },
  {
    accessorKey: "Transport_Mode",
    header: "Transport Mode",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Transport_Mode")}</div>
    ),
  },
  {
    accessorKey: "zone",
    header: "Zone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("zone")}</div>
    ),
  },
  
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: () => {
  //     // const payment = row.original

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           {/* <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem> */}
  //           {/* <DropdownMenuSeparator /> */}
  //           <DropdownMenuItem>Download Shipping Label</DropdownMenuItem>
  //           {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]