import { Message } from "./types";
import { createHash } from "crypto";

export function hash(messages: Message[], expectations): string {
  const hash1 = createHash("sha256")
    .update(JSON.stringify(messages))
    .digest("hex");
  const hash2 = createHash("sha256")
    .update(JSON.stringify(expectations))
    .digest("hex");

  return `${hash1}-${hash2}`;
}
