import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, SystemMessage

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

llm = ChatGroq(model="llama-3.3-70b-versatile", temperature=0.0)

SYSTEM_PROMPT = """You are FinVerify AI, an expert financial analyst and misinformation detector.
Detect financial misinformation, assess risk levels (Low/Medium/High), identify Ponzi schemes,
pump-and-dump, and other fraud tactics. Always be clear and protect users from financial harm."""

class ChatRequest(BaseModel):
    query: str
    reset: bool = False

@app.post("/api/news")
async def chat(req: ChatRequest):
    try:
        messages = [
            SystemMessage(content=SYSTEM_PROMPT),
            HumanMessage(content=req.query)
        ]
        response = llm.invoke(messages)
        return {"answer": response.content, "type": "financial", "top_articles": []}
    except Exception as e:
        return {"error": str(e)}

@app.get("/health")
async def health():
    return {"status": "ok"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)