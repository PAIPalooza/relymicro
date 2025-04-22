from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    """Application settings"""
    SUPABASE_URL: str
    SUPABASE_KEY: str
    DATABASE_URL: Optional[str] = None
    ENV: str = "development"
    
    class Config:
        env_file = ".env"
        case_sensitive = True
