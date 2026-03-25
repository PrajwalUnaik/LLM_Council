"""Configuration for the LLM Council."""

import os
from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

COUNCIL_MODELS = [
    "google/gemini-3-pro-preview",
    "openai/gpt-5.1",
    "anthropic/claude-sonnet-4.5",
    "x-ai/grok-4",
]

# Chairman model 
CHAIRMAN_MODEL = "google/gemini-3-pro-preview"

OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"

DATA_DIR = "data/conversations"
