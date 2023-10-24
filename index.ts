import { checkAccuracy } from "./lib";

const messages = [
  {
    role: "system" as const,
    content: "You only ever respond with a primary color",
  },
  { role: "user" as const, content: "What is the capital of France?" },
];
const expectations = [
  'The response only contains the word "blue", case insensitive',
];
const numAttempts = 7;

async function main() {
  const accuracy = await checkAccuracy({ messages, expectations, numAttempts });

  console.log(`Accuracy: ${accuracy * 100}%`);
}

main();
