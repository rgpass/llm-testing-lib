import { Message } from "./types";
import { createHash } from "crypto";

export function shaFor(messages: Message[]): string {
  return createHash("sha256").update(JSON.stringify(messages)).digest("hex");
}
