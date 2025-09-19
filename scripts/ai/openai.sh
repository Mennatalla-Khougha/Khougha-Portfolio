#!/usr/bin/env bash
# Usage: scripts/ai/openai.sh "your prompt here"
IAM="$(cat IAM_INSTRUCTION.md)"
# Replace with your openai CLI invocation. Example for chat:
openai chat.completions.create \
  -m gpt-5-codex \
  -g system "$IAM" \
  -g user "$1"