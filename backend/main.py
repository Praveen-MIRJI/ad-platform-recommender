from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend (React) to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev, allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input schema
class AdRequest(BaseModel):
    domain: str
    content: str

@app.get("/")
def root():
    return {"message": "AI Advertisement Project Backend is running 🚀"}

@app.post("/recommend")
def recommend_ad(data: AdRequest):
    # 🔹 For now, return a dummy recommendation
    domain = data.domain.lower()

    if "education" in domain:
        platform = "YouTube"
    elif "fitness" in domain:
        platform = "Instagram"
    elif "tech" in domain:
        platform = "LinkedIn"
    else:
        platform = "Google Ads"

    return {
        "recommendation": f"{platform} is the best platform for {data.domain} ads."
    }
