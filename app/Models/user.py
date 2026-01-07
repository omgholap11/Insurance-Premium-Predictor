from sqlalchemy import Integer , Column , String 
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    user_id = Column(Integer , primary_key=True , autoincrement=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)

