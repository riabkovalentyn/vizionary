from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index = True)
    usernames = Column(String, unique=True, index = True)
    email = Column(String, unique=True, index = True)

    password_hash = Column(String)


class DataSource(Base):
    __tablename__ = 'data_sources'

    id = Column(Integer, primary_key=True, index = True)
    user_id = Column(Integer, ForeignKey("user.id"))
    source_name = Column(String)

    user = relationship("User", back_populates="data_sources")

User.data_sources = relationship("DataSource", back_populates= "user")


