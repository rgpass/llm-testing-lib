// Given an array of Messages, an array of Expectations, the number of attempts,
// return the consistency of the results as a number between 0 and 1.

import { hash } from "./hash";
import { completion, meetsExpectations } from "./llm";
import { load, saveOne } from "./messagesStore";
import { Message, StoredMessage } from "./types";

type CheckAccuracy = {
  messages: Message[];
  expectations: string[];
  numAttempts: number; // >0
  logFailures?: boolean;
};

export async function checkAccuracy({
  messages,
  expectations,
  numAttempts,
  logFailures = false,
}: CheckAccuracy): Promise<number> {
  const hashVal = hash(messages, expectations);

  const existing = await load(hashVal);

  const count = numAttempts - existing.length;

  for (let i = 0; i < count; i++) {
    const content = await completion(messages);
    const metExpectations = await meetsExpectations(content, expectations);

    const message: StoredMessage = { content, metExpectations };
    existing.push(message);

    // Saved after each attempt in case of a timeout or other error
    // midway through.
    await saveOne(hashVal, message);
  }

  const passed = existing.filter((m) => m.metExpectations);
  const failed = existing.filter((m) => !m.metExpectations);

  if (logFailures) {
    console.log("Failed:");
    failed.forEach((m) => console.log(m.content));
  }

  return passed.length / numAttempts;
}
