# LLM Testing Lib

## Objectives

- Allow for easy testing of LLM calls
- Speed up tests and save money of LLM calls by storing them in source

## Overview

Use `checkAccuracy` to check how accurately your prompt meets expectations. The arguments are:

- `messages` -- the history of messages, aka the conversation thus far. The last one will be the one being sent by the `user`
- `expectations` -- an array of rules that you expect the response to meet
- `numAttempts` -- depending on how accurate you need to be. If you need 99% accuracy, you would do (at least) 100 attempts
- `logFailures` -- optional, best used when troubleshooting

## Upcoming Improvements

- Modify `index.ts` to be like a playground area for easier experimentation
- List of what failed -- see which expectations failed (or why it failed from OpenAI's perspective)
- UI+API for anyone to fork and deploy (perhaps using Next + Vercel)
- Prompt comparison -- be able to compare accuracy of 2+ prompts, given a set of expectations
- Change LLM's/models -- be able to change completion model and assertion model
