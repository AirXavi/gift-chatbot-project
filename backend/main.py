# backend/main.py

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = FastAPI()

# Allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class GiftRequest(BaseModel):
    recipient: str
    occasion: str
    age: str
    interests: str
    personality: str
    needs: str
    avoid: str

@app.post("/generate/")
async def generate_gift_idea(data: GiftRequest):
    prompt = (
        f"Suggest three thoughtful physical gift ideas for {data.recipient}.\n"
        f"Occasion: {data.occasion}\n"
        f"Age: {data.age}\n"
        f"Interests: {data.interests}\n"
        f"Personality: {data.personality}\n"
        f"Needs or wants: {data.needs}\n"
        f"Avoid: {data.avoid}"
    )
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that recommends gifts."},
                {"role": "user", "content": prompt}
            ]
        )
        return {"response": response.choices[0].message.content.strip()}
    except Exception as e:
        return {"error": str(e)}
