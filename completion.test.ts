import { completion } from "./completion";

describe("completion", () => {
  it("returns a string", async () => {
    const val = await completion([{ role: "user", content: "Hello, world!" }]);

    expect(typeof val).toBe("string");
  });

  it("consistently returns the same string", async () => {
    const messages = [{ role: "user" as const, content: "Hello, world!" }];

    const val1 = await completion(messages);
    const val2 = await completion(messages);

    expect(val1).toBe(val2);
  });
});
