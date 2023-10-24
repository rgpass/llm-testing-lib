import OpenAI from "openai";

export type Message = OpenAI.Chat.Completions.ChatCompletionMessageParam;

export type StoredMessage = {
  content: string;
  metExpectations: boolean;
};
