import { checkAccuracy } from "./checkAccuracy";

describe("checkAccuracy", () => {
  describe("when expectations are met every time", () => {
    it("returns 1", async () => {
      const prompt = "What is the capital of France?";

      const messages = [{ role: "user" as const, content: prompt }];
      const expectations = ["Contains the word 'Paris'"];
      const numAttempts = 5;

      const actual = await checkAccuracy({
        messages,
        expectations,
        numAttempts,
      });

      expect(actual).toEqual(1);
    });
  });

  describe("when expectations are never met", () => {
    it("returns 0", async () => {
      const prompt = "What is the capital of England?";

      const messages = [{ role: "user" as const, content: prompt }];
      const expectations = ["Contains the word 'Paris'"];
      const numAttempts = 5;

      const actual = await checkAccuracy({
        messages,
        expectations,
        numAttempts,
      });

      expect(actual).toEqual(0);
    });
  });

  describe("when expectations are met some of the time", () => {
    it("returns a number between 0 and 1", async () => {
      const prompt = "Respond with a primary color and only a primary color.";

      const messages = [{ role: "user" as const, content: prompt }];
      const expectations = ["Includes the word 'red'"];
      const numAttempts = 10;

      const actual = await checkAccuracy({
        messages,
        expectations,
        numAttempts,
      });

      expect(actual).toBeGreaterThan(0);
      expect(actual).toBeLessThan(1);
    });
  });
});
