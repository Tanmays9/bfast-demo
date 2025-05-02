"use client";
import { Item } from "./types";

const columns = [
  { name: "awb", label: "AWB" },
  { name: "cid", label: "Client Order ID" },
  { name: "Order_Creation_Date", label: "Order Creation Date" },
  { name: "name", label: "Name" },
  { name: "phone", label: "Phone" },
  { name: "address", label: "Address" },
  { name: "pincode", label: "Pincode" },
  { name: "quantity", label: "Quantity" },
  { name: "Payment_Mode", label: "Payment Mode" },
  { name: "codamount", label: "COD Amount" },
  { name: "Delivery_Center_Name", label: "Delivery Center Name" },
  { name: "Courier_Partner", label: "Courier Partner" },
  { name: "Transport_Mode", label: "Transport Mode" },
  { name: "zone", label: "Zone" },
];

// const csvContent = "data:text/csv;charset=utf-8," +
// "Name,Gender,Age,Created At\n" +user.map(user =>
//      `"${user.firstName}${user.lastName}",${user.sex},${calculateAge(user.ageGroup)},"${new Date(user.createdAt).toLocaleString()}"`
//     ).join("\n");

export function generateCSV(data: Item[]) {
  console.log(data);
  let baseContent = "data:text/csv;charset=utf-8,";
  if (data.length > 0) {
    baseContent += columns.map((col) => col.label).join(",") + "\n";
  }
  baseContent += data
    .map((rec) => {
      return columns.map((col) => {
        return rec[col.name as keyof Item] ? `"${rec[col.name as keyof Item]}"` : ""
      }).join(",");
    })
    .join("\n");
  const encodedUri = encodeURI(baseContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "user_list.csv");
  document.body.appendChild(link);
  link.click();
}
