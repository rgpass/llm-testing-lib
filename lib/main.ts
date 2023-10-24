// Given an array of Messages, an array of Expectations, the number of attempts,
// return the consistency of the results as a number between 0 and 1.

import { hash } from "./hash";
import { load } from "./store";
import { Message } from "./types";

type AccuracyCheck = {
  messages: Message[];
  expectations: string[];
  attempts: number; // >0
};

export async function accuracyCheck({
  messages,
  expectations,
  attempts,
}: AccuracyCheck): Promise<number> {
  const hashVal = hash(messages);

  const existing = await load(hashVal);

  return 1;

  // let successes = 0;

  // for (let i = 0; i < attempts; i++) {
  //   const result = await completion(messages);
  //   const meets = await meetsExpectations(result, expectations);

  //   if (meets) {
  //     successes++;
  //   }
  // }

  // return successes / attempts;
}
