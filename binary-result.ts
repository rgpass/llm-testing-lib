import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-4",
  });

  console.log(chatCompletion.choices);
}

main();
