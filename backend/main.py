from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="Operis API", version="1.0.0")

# Настройка CORS для работы с фронтендом
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене указать конкретные домены
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class GenerateRequest(BaseModel):
    text: str


class GenerateResponse(BaseModel):
    response: str
    text: Optional[str] = None


@app.post("/generate", response_model=GenerateResponse)
async def generate(request: GenerateRequest):
    """
    Генерация ответа на отзыв клиента
    """
    # Здесь будет логика генерации ответа
    # Пока возвращаем демо-ответ
    demo_response = (
        "Благодарим за обратную связь. Мы ценим ваше мнение и обязательно учтем "
        "ваши замечания для улучшения качества нашего сервиса. "
        "Если у вас есть дополнительные вопросы, мы готовы помочь."
    )
    
    return GenerateResponse(response=demo_response)


@app.get("/")
async def root():
    return {"message": "Operis API is running"}


@app.get("/health")
async def health():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
