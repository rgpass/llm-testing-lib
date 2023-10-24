import { booleanResult } from "./boolean-result";

describe("booleanResult", () => {
  describe("when the statement is true", () => {
    it("returns true", async () => {
      const statement = "Purple is a color";
      const result = await booleanResult(statement);

      expect(result).toBe(true);
    });
  });

  describe("when the statement is false", () => {
    it("returns false", async () => {
      const statement = "Purple is a number";
      const result = await booleanResult(statement);

      expect(result).toBe(false);
    });
  });
});
