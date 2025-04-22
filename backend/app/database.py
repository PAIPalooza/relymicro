from supabase import create_client, Client
from app.config import Settings
from functools import lru_cache

@lru_cache()
def get_settings():
    return Settings()

@lru_cache()
def get_supabase_client() -> Client:
    """Get cached Supabase client instance"""
    settings = get_settings()
    return create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)
