import { readFile, writeFile } from "jsonfile";

const file = "./storedCompletions.json";

export async function load(hash: string): Promise<string[]> {
  const json = await readFile(file);

  return json[hash] ?? [];
}

export async function save(hash: string, messages: string[]): Promise<void> {
  const json = await readFile(file);

  json[hash] = messages;

  await writeFile(file, json);
}
