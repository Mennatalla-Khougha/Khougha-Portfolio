#!/usr/bin/env bash
# Usage: scripts/ai/gemini.sh "your prompt here"
IAM="$(cat IAM_INSTRUCTION.md)"
# Replace the next line with your actual gemini CLI invocation/flags:
gemini --system "$IAM" --input "$1"