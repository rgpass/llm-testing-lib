import { readFile, writeFile } from "jsonfile";
import { StoredMessage } from "./types";
import path from "path";

// const file = "./storedMessages.json";
const file = path.resolve(__dirname, "storedMessages.json");

export async function load(hash: string): Promise<StoredMessage[]> {
  const json = await readFile(file);

  return json[hash] ?? [];
}

export async function save(
  hash: string,
  messages: StoredMessage[]
): Promise<void> {
  const json = await readFile(file);

  json[hash] = messages;

  await writeFile(file, json);
}

export async function saveOne(
  hash: string,
  message: StoredMessage
): Promise<void> {
  const json = await readFile(file);
  json[hash] = json[hash] ?? [];

  json[hash].push(message);

  await writeFile(file, json);
}
