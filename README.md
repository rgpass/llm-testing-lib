# LLM Testing Lib

## Objectives

- Experiment with different strategies for testing LLMs
- Allow for easy testing of LLM calls
- Speed up tests and save money of LLM calls by storing them in source

## Braindump

- Some tests can be handled programmatically, such as if it returns `"1"` or `"0"`
  - This is a foundational step, so needs to be included
- Some tests need to be handled logically, such as if the response is, `"My favorite color is purple."`, you could have an assertion like, "Did it respond with a color?"
- Prompts evolve over time, but still need to support previous test cases. Make this easy
- Consider having a UI where this could be deployed and used by companies
