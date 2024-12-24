from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import crud, models, schemas, database


app = FastAPI()

models.Base.metadata.create_all(bind=database.engine)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post('/users/')
    def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
        return crud.create_user(db, user.name, user.email, user.password)