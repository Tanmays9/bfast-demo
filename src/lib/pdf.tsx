"use client"
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import { Item } from "./types";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row"
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
        <Text>{new Date().toString()}</Text>
        <Text>Section #1</Text>
        <Text>{props.data.name}</Text>
        

        
      </View>
      <View style={styles.section}>
        <Image src="/bfastlogo.png" />
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
