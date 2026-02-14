from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/generate", tags=["generate"])


class GenerateRequest(BaseModel):
    text: str


class GenerateResponse(BaseModel):
    response: str
    text: Optional[str] = None


@router.post("", response_model=GenerateResponse)
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
