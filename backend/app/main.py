from fastapi import FastAPI, HTTPException
from app.config import Settings
from app.database import get_supabase_client, get_settings

app = FastAPI(title="Micro-Budget Advisor API")
settings = get_settings()

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "version": "1.0.0"}

@app.get("/db-health")
async def db_health():
    """Check Supabase connection health"""
    try:
        client = get_supabase_client()
        # Simple query to test connection
        result = client.table('test').select("*").limit(1).execute()
        return {"status": "connected", "timestamp": result.created_at}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database connection failed: {str(e)}")

@app.get("/models-health")
async def models_health():
    """Check if database models are properly configured"""
    try:
        # This will be implemented when we add our models
        return {"models_status": "configured"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
