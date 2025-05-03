import { Checkbox } from "@radix-ui/react-checkbox"
import { ColumnDef } from "@tanstack/react-table"
// import { Payment } from "./data-table"
import { Item } from "@/lib/types"
import { Download } from "lucide-react"
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
    header: () => <div className="text-right">Download PDF</div>,
    cell: ({ row }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => generateSingleCSV(row.index)}
        >

          <Download />
        </Button>
      )
    },
  },
  {
    accessorKey: "awb",
    accessorFn: (row) => (
      <>
        <div className="capitalize">AWB: {row.awb}</div>
        <div className="capitalize">Client Order ID: {row.cid}</div>
        <div className="capitalize">Order Creation Date: {row.Order_Creation_Date}</div>
      </>
    ),
    header: "Order Details",
    cell: ({ row }) => (
      row.getValue("awb")
    ),
  },
  {
    accessorKey: "name",
    accessorFn: (row) => (
      <>
        <div className="capitalize">Name: {row.name}</div>
        <div className="capitalize">Phone: {row.phone}</div>
        <div className="capitalize text-wrap">Address: {row.address}</div>
        <div className="capitalize">Pincode: {row.pincode}</div>
      </>
    ),
    header: "Consignee Details",
    cell: ({ row }) => (
      row.getValue("name")
    ),
    size:200
    ,
  },
  {
    accessorKey: "quantity",
    accessorFn: (row) => (
      <>
        <div className="capitalize">Quantity: {row.quantity}</div>
        <div className="capitalize">Payment Mode: {row.Payment_Mode}</div>
        <div className="capitalize">COD Amount: {row.codamount}</div>
      </>
    ),
    header: "Product Details",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "Delivery_Center_Name",
    accessorFn: (row) => (
      <>
        <div className="capitalize">Delivery Center Name: {row.Delivery_Center_Name}</div>
        <div className="capitalize">Courier Partner: {row.Courier_Partner}</div>
        <div className="capitalize">Transport Mode: {row.Transport_Mode}</div>
        <div className="capitalize">Zone: {row.zone}</div>
      </>
    ),
    header: "Shipping Details",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Delivery_Center_Name")}</div>
    ),
  },

]