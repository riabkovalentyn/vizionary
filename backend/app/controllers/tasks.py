from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Task(BaseModel):
    id: int
    title: str
    completed: bool = False

tasks = []    

@router.post("/tasks/", response_model = Task)
def create_tasks(task: Task):
    tasks.append(task)
    return task

@router.get("/tasks/", response_model = List[Task])
def get_task():
    return tasks

@router.put("/tasks/{task_id}", response_model = Task)

def update_task(task_id: int, updated_task: Task):
    for task in tasks:
        if task.id == task.id:
            task.title = updated_task.title
            task.completed = updated_task.completed
            return task
        
    raise HTTPException(status_code=404,  detail="Task not found")    


@router.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    global tasks
    tasks = [tasks for task in tasks if task.id != task_id]
    return {"detail": "Task deleted"}

