from langgraph.graph import MessagesState
from pydantic import BaseModel, Field
from typing import List

class CityState(MessagesState):
    neighborhood_list: list # list of neighborhoods and tasks
    destination: str # destination city

class Task(BaseModel):
    """Individual task for a neighborhood"""
    description: str = Field(..., description="Description of the task")

class Neighborhood(BaseModel):
    """Neighborhood with its associated tasks"""
    name: str = Field(..., description="Name of the neighborhood")
    tasks: List[Task] = Field(..., description="List of tasks for this neighborhood")

class NeighborhoodList(BaseModel):
    """List of neighborhoods and their associated tasks"""
    neighborhoods: List[Neighborhood] = Field(..., description="List of neighborhoods with their tasks")