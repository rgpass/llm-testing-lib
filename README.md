# LLM Testing Lib

## Objectives

- Allow for easy testing of LLM calls
- Speed up tests and save money of LLM calls by storing them in source

## Concepts Applied

- Use GPT-4 to assert that its own response meets a set of expectations
- Store responses in source to increase test speed and save money

## Playground

Clone this repo, experiment with the values in `index.ts`, then run `npm run main` to see how accurately your prompt meets a set of expectations. Ensure you have an environment variable set up for `OPENAI_API_KEY` and have access to GPT-4 via OpenAI's API.

The arguments for `checkAccuracy` are:

- `messages` -- the history of messages, aka the conversation thus far. The last one will be the one being sent by the `user`
- `expectations` -- an array of rules that you expect the response to meet
- `numAttempts` -- depending on how accurate you need to be. If you need 99% accuracy, you would do (at least) 100 attempts
- `logFailures` -- optional, best used when troubleshooting

## Upcoming Improvements

- List of what failed -- see which expectations failed (or why it failed from OpenAI's perspective)
- UI+API for anyone to fork and deploy (perhaps using Next + Vercel)
- Prompt comparison -- be able to compare accuracy of 2+ prompts, given a set of expectations
- Change LLM's/models -- be able to change completion model and assertion model
