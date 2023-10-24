import { Message } from "./types";
import { createHash } from "crypto";

export function hash(messages: Message[]): string {
  return createHash("sha256").update(JSON.stringify(messages)).digest("hex");
}
