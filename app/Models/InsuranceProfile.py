from sqlalchemy import Column , Integer , String , Float , ForeignKey , Boolean
from sqlalchemy.orm import relationship

## keep the base class same for the entire schemas right 
from app.Models.user import Base

class InsuranceProfileModel(Base):
    __tablename__ = "insurance_profiles"
    id = Column(Integer , primary_key=True , autoincrement=True , index=True)

    user_id = Column(Integer , ForeignKey("users.id" , ondelete = "CASCADE") , nullable=False)

    age = Column(Integer , nullable=False)
    weight = Column(Float , nullable=False)
    income_lpa = Column(Float , nullable=False)
    smoker = Column(Boolean , nullable=True)
    city = Column(String , nullable=False)
    occupation = Column(String , nullable=False)

    user = relationship(
        "UserModel",
        back_populates="insurance_profiles"   ## back_populates signifies the both ends are in the sync relationships so if 
        #any one of the model value undergoes changes changes gets replicated in the same one 
    )

    prediction = Column(String , nullable = False)



    