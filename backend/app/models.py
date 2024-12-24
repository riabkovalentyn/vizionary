from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index = True)
    usernames = Column(String, unique=True, index = True)
    email = Column(String, unique=True, index = True)

    password_hash = Column(String)

    