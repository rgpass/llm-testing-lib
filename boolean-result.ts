import OpenAI from "openai";

const openai = new OpenAI();

export async function booleanResult(content: string): Promise<boolean> {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a truth detector. You return 1 if the statement is true and 0 if the statement is false.",
      },
      { role: "user", content },
    ],
    model: "gpt-4",
  });

  const choice = chatCompletion.choices[0];

  if (!choice) throw new Error("No choice returned from OpenAI");

  const val = Number(choice.message.content);

  if (Number.isNaN(val)) {
    throw new Error("OpenAI returned a value that is not a number");
  }

  if (val !== 0 && val !== 1) {
    throw new Error("OpenAI returned a value that is not 0 or 1");
  }

  return val === 1;
}
