from sqlalchemy import Integer , Column , String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class UserModel(Base):
    __tablename__ = "users"

    id = Column(Integer , primary_key=True , autoincrement=True)
    name = Column(String)
    email = Column(String , unique=True , nullable=False)
    password = Column(String , nullable=False)

    insurance_profiles = relationship(
        "InsuranceProfileModel" , 
        back_populates='user',
        cascade="all, delete-orphan"
    )


# Import InsuranceProfileModel after UserModel is defined to avoid circular import
# This ensures InsuranceProfileModel is in the registry for the relationship
from app.Models.InsuranceProfile import InsuranceProfileModel
