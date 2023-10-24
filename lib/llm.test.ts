import { completion, meetsExpectations } from "./llm";

// Skipped to save money on OpenAI API calls
describe.skip("meetsExpectations", () => {
  describe("when the response meets the expectation", () => {
    it("returns true", async () => {
      const prompt = "Give me a random color.";
      const expectations = ["Includes one and only one color."];

      const messages = [{ role: "user" as const, content: prompt }];
      const result = await completion(messages);

      const actual = await meetsExpectations(result, expectations);

      expect(actual).toBe(true);
    });
  });

  describe("when the response does not meet the expectation", () => {
    it("returns false", async () => {
      const prompt = "What is the capital of France?";
      const expectations = ["Includes one and only one color."];

      const messages = [{ role: "user" as const, content: prompt }];
      const result = await completion(messages);

      const actual = await meetsExpectations(result, expectations);

      expect(actual).toBe(false);
    });
  });
});
