"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel
} from "@tanstack/react-table"
import { columns } from "./columns"
import { Data } from "@/lib/data"
import { Input } from "./ui/input"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { generateCSV } from "@/lib/csv"
import { usePDF } from '@react-pdf/renderer';
import { MyDocument } from "@/lib/pdf"
import Link from "next/link"
import { useState } from "react"
import { Item } from "@/lib/types"
import dynamic from "next/dynamic";
import { generatebulkCSV } from "@/lib/zip"




export function DataTable() {
    // state for storing info about user creating Invoice
    const [instance] = usePDF({
        document: <MyDocument data={Data[0]} />
    })
    const [rowSelection, setRowSelection] = useState({})
    const [customerInfo, setCustomerInfo] = useState(Data)
    function filterdata(searchstr: string){
        if(searchstr != ''){

            setCustomerInfo(Data.filter(dta=>{
                console.log(dta.name.includes(searchstr))
                return dta.name.toLowerCase().includes(searchstr.toLowerCase()) 
                ||dta.awb.toLowerCase().includes(searchstr.toLowerCase())
                ||dta.pincode.toString().includes(searchstr.toLowerCase())
            }))
        }else{
            setCustomerInfo(Data)
        }
    }

    const table = useReactTable({
        data: customerInfo,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection
        },
    })
    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter names, AWB, Pincode..."
                    
                    onChange={(event)=> filterdata(event.target.value)}
                    className="max-w-sm"
                />
                <Button variant="outline" className="ml-auto" onClick={() => generateCSV(Data)}>
                    Download CSV
                </Button>
                
                <Button variant="outline" className="ml-auto" onClick={generatebulkCSV} >
                    Download All Shipping Label
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
