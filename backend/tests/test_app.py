import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock
from app.main import app

client = TestClient(app)

def test_health_check():
    """Test the health check endpoint returns 200 and correct message"""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy", "version": "1.0.0"}

@patch('app.main.get_supabase_client')
def test_supabase_connection(mock_get_client):
    """Test that Supabase connection is working"""
    # Mock the Supabase client
    mock_client = MagicMock()
    mock_table = MagicMock()
    mock_select = MagicMock()
    mock_limit = MagicMock()
    mock_execute = MagicMock()
    
    # Setup the mock chain
    mock_get_client.return_value = mock_client
    mock_client.table.return_value = mock_table
    mock_table.select.return_value = mock_select
    mock_select.limit.return_value = mock_limit
    mock_limit.execute.return_value = MagicMock(created_at="2025-04-22T13:29:34")
    
    response = client.get("/db-health")
    assert response.status_code == 200
    assert response.json()["status"] == "connected"
    assert "timestamp" in response.json()

@pytest.mark.asyncio
async def test_database_models():
    """Test that database models are properly configured"""
    response = client.get("/models-health")
    assert response.status_code == 200
    assert "models_status" in response.json()
    assert response.json()["models_status"] == "configured"
