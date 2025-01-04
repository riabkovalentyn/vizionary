from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from typing import List, Optional

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
def get_task(
    completed: Optional[bool] = None,
    sort_by: Optional[str] = Query(None, regex="^(title| completed)$^"),
    skip: int = 0,
    limit: int = 10,
):
    filtered_tasks = tasks
    if completed is not None:
        filtered_tasks = [task for task in tasks if task.completed == completed]

    if sort_by:
        filtered_tasks = sorted(filtered_tasks, key=lambda x: getattr(x, sort_by))
    return filtered_tasks[skip : skip + limit]

@router.get("/tasks/{task_id}", response_model = Task)
def get_task(task_id: int):
    for task in tasks:
        if task.id == task_id:
            return task
    
    raise HTTPException(status_code=404,  detail="Task not found")

@router.put("/tasks/{task_id}", response_model = Task)
def update_task(task_id: int, updated_task: Task):
    for task in tasks: 
        if task.id == task_id: 
            task.title = updated_task.title
            task.completed = updated_task.completed
            return task
    raise HTTPException(status_code=404, detail="Task not found")

@router.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    global tasks
    tasks = [tasks for task in tasks if task.id != task_id]
    return {"detail": "Task deleted"}

