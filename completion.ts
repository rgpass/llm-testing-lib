import OpenAI from "openai";
import { createHash } from "crypto";
import { readFile, writeFile } from "jsonfile";

const file = "./completions.json";

const openai = new OpenAI();

type Message = OpenAI.Chat.Completions.ChatCompletionMessageParam;

export async function completion(messages: Message[]): Promise<string> {
  const sha = createHash("sha256")
    .update(JSON.stringify(messages))
    .digest("hex");

  const stored = await storedCompletionFor(sha);

  if (stored) return stored;

  const chatCompletion = await openai.chat.completions.create({
    messages,
    model: "gpt-4",
  });

  const choice = chatCompletion.choices[0];

  if (!choice) throw new Error("No choice returned from OpenAI");

  const { content } = choice.message;

  await storeCompletionFor(sha, content);

  return content;
}

async function storedCompletionFor(sha: string): Promise<string> {
  const json = await readFile(file);
  const found = json[sha];

  return found?.completion ?? "";
}

async function storeCompletionFor(sha: string, content: string): Promise<void> {
  const json = await readFile(file);

  json[sha] = { completion: content };

  await writeFile(file, json);
}
