import { consistencyResult } from "./consistency-check";
import { resultFor } from "./logical-result";

describe.skip("consistencyCheck", () => {
  describe("when the result is deterministic", () => {
    it(
      "returns 1",
      async () => {
        const prompt = "What is the capital of France?";
        const expectation = "Includes the word 'Paris'";

        let results = [];

        for (let i = 0; i < 2; i++) {
          const result = await resultFor(prompt);
          results.push(result);
        }

        const val = await consistencyResult(results, expectation);

        expect(val).toBe(1);
      },
      { timeout: 10000 }
    );
  });

  describe("when the result is not deterministic", () => {
    it("returns a number less than 1", async () => {});
  });
});
