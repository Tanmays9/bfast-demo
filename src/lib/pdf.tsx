"use client"
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import { Item } from "./types";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row"
  },
  logo: {
    width: 96,
    height: 51
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
type Props = {
  data: Item,
};

export const MyDocument = (props :Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>BFAST EXPRESS SERVICES</Text>
        <Text>{new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })}</Text>
        <Text>{props.data.Transport_Mode}</Text>
        <Text>{props.data.awb}</Text>
        <Text>Consignee Details:</Text>
        <Text>{props.data.name}</Text>
        <Text>{props.data.phone}</Text>
        <Text>{props.data.address}</Text>
        <Text>{props.data.pincode}</Text>
        <Text>Payment Mode</Text>
        <Text>{props.data.amount}</Text>
        

        
      </View>
      <View style={styles.section}>
        <Image style={styles.logo} src="https://www.bfastservices.com/_next/image?url=%2Fimg%2Fbfastlogo.png&w=96&q=75" />
      </View>
    </Page>
  </Document>
);
