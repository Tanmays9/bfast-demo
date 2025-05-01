"use server";

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;
if (!databaseId) throw new Error("NOTION_DATABASE_ID is not defined");
const configdatabaseId = process.env.NOTION_PAGE_DATABASE_ID;
if (!databaseId) throw new Error("NOTION_PAGE_DATABASE_ID is not defined");

export async function getData() {
  if (!configdatabaseId)
    throw new Error("NOTION_PAGE_DATABASE_ID is not defined");
  const { results } = await notion.databases.query({
    database_id: configdatabaseId,
  });
  return results;
}
