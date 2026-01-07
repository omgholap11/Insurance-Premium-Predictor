from sqlalchemy import Column , Integer , String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class InsuranceProfile(Base):
    __tablename__ = "Insurance_Profile"
    id = Column(Integer , primary_key=True , autoincrement=True , index=True)
    