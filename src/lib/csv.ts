"use client";
import { Item } from "./types";

// const csvContent = "data:text/csv;charset=utf-8," +
// "Name,Gender,Age,Created At\n" +user.map(user =>
//      `"${user.firstName}${user.lastName}",${user.sex},${calculateAge(user.ageGroup)},"${new Date(user.createdAt).toLocaleString()}"`
//     ).join("\n");

export function generateCSV(data: Item[]) {
  let baseContent = "data:text/csv;charset=utf-8,";
  if (data.length > 0) {
    const rec = data[0];
    baseContent += Object.entries(rec).join(",") + "\n";
    baseContent += data
      .map((rec) => {
        return Object.values(rec).join(",");
      })
      .join("\n");
  }
  const encodedUri = encodeURI(baseContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "user_list.csv");
  document.body.appendChild(link);
  link.click();
}
