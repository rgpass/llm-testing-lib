import { hash } from "./hash";

const EXPECTED_LENGTH = 129; // 64 + a dash + 64

describe("hash", () => {
  describe("when given the same messages", () => {
    it("returns the same string", () => {
      const messages = [{ role: "user" as const, content: "Hello" }];
      const expectations = ["anything"];

      const val1 = hash(messages, expectations);
      const val2 = hash(messages, expectations);

      expect(val1).toEqual(String(val1));

      expect(val1).toEqual(val2);
      expect(val1.length).toEqual(EXPECTED_LENGTH);
      expect(val2.length).toEqual(EXPECTED_LENGTH);
    });
  });

  describe("when given different messages", () => {
    it("returns different string", () => {
      const messages1 = [{ role: "user" as const, content: "Hello" }];
      const messages2 = [{ role: "user" as const, content: "World" }];
      const expectations = ["anything"];

      const val1 = hash(messages1, expectations);
      const val2 = hash(messages2, expectations);

      expect(val1).toEqual(String(val1));
      expect(val2).toEqual(String(val2));

      expect(val1).not.toEqual(val2);
      expect(val1.length).toEqual(EXPECTED_LENGTH);
      expect(val2.length).toEqual(EXPECTED_LENGTH);
    });
  });
});
