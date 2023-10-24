import { hash } from "./hash";

describe("hash", () => {
  describe("when given the same messages", () => {
    it("returns the same string", () => {
      const messages = [{ role: "user" as const, content: "Hello" }];

      const val1 = hash(messages);
      const val2 = hash(messages);

      expect(val1).toEqual(String(val1));

      expect(val1).toEqual(val2);
      expect(val1.length).toEqual(64);
      expect(val2.length).toEqual(64);
    });
  });

  describe("when given different messages", () => {
    it("returns different string", () => {
      const messages1 = [{ role: "user" as const, content: "Hello" }];
      const messages2 = [{ role: "user" as const, content: "World" }];

      const val1 = hash(messages1);
      const val2 = hash(messages2);

      expect(val1).toEqual(String(val1));
      expect(val2).toEqual(String(val2));

      expect(val1).not.toEqual(val2);
      expect(val1.length).toEqual(64);
      expect(val2.length).toEqual(64);
    });
  });
});
