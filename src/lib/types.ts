export type Item = {
    awb: string
    cid: string
    Order_Creation_Date? : Date
    name: string
    phone: number
    address?: string
    pincode : number
    quantity: number
    Payment_Mode: string
    codamount: number
    Delivery_Center_Name: string
    Courier_Partner: string
    Transport_Mode: string
    zone: string
    amount: number
    status: "pending" | "processing" | "success" | "blocked"
}

export type NotionSchema = {
    properties : string
}