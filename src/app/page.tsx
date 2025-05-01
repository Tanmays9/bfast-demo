/* eslint-disable @next/next/no-async-client-component */
// "use client"

import { DataTable } from "@/components/data-table";
// import { getData } from "@/lib/notion";



export default async function Page() {
  // const data = await getData()
  // console.log(data)
  return (

    <>
      <div className=" flex justify-center p-10 ">
        <div className="overflow-hidden w-300">
          <DataTable />
        </div>
      </div>
    </>

  );
}
