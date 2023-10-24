import OpenAI from "openai";
import { booleanResult } from "./boolean-result";

const openai = new OpenAI();

export async function resultFor(prompt: string): Promise<string> {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4",
  });

  const choice = chatCompletion.choices[0];

  if (!choice) throw new Error("No choice returned from OpenAI");

  return choice.message.content;
}

export async function meetsExpectations(
  result: string,
  expectation: string
): Promise<boolean> {
  const prompt = `EXPECTATION: ${expectation}\nRESULT: ${result}\nThe RESULT meets the EXPECTATION.`;

  const meetsExpectations = await booleanResult(prompt);

  return meetsExpectations;
}
