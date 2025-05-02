"use client"
import JSZip from "jszip";
import { pdf } from '@react-pdf/renderer';
import { MyDocument } from "@/lib/pdf"
import { Data } from "./data";
import { saveAs } from "file-saver";
import { Item } from "./types";


export function generatebulkCSV() {
    const zip = new JSZip();

    const remoteZips = Data.map(dta => {
        return zip.file(`${dta.cid}.pdf`, pdf(<MyDocument data={dta} />).toBlob());
    })
    
    zip.generateAsync({type: "blob"}).then(blob => {saveAs(blob, "orders.zip")});

    // Promise.all(remoteZips)
    // .then(() => {
    //     zip.generateAsync({ type: "blob" }).then((content) => {
    //       // give the zip file a name
    //       saveAs(content, "zip-download-next-js.zip");
    //     });
    //   })
    //   .catch(() => {
    //   });
}
export async function generateSingleCSV(index: number) {
    const blob = await pdf(<MyDocument data={Data[index]} />).toBlob()
    saveAs(blob, `${Data[index].cid}.pdf`)
}

