import { meetsExpectations, resultFor } from "./logical-result";

describe("logicalResult", () => {
  describe("when the response meets the expectation", () => {
    it("returns true", async () => {
      const prompt = "Give me a random color.";
      const expectation = "Includes one and only one color.";

      const result = await resultFor(prompt);

      const actual = await meetsExpectations(result, expectation);

      expect(actual).toBe(true);
    });
  });

  describe("when the response does not meet the expectation", () => {
    it("returns false", async () => {
      const prompt = "What is the capital of France?";
      const expectation = "Includes one and only one color.";

      const result = await resultFor(prompt);

      const actual = await meetsExpectations(result, expectation);

      expect(actual).toBe(false);
    });
  });
});
