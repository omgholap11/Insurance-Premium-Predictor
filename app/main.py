from fastapi import FastAPI , Depends
from app.Router.user import userrouter
from app.Config.database import engine
from app.Models.user import Base
from app.Router.ipprediction import insurance_router
from app.Middlewares.Authentication import auth_middleware

app = FastAPI()


# Create all tables in the database
# it creates all the databases required initially right there 
Base.metadata.create_all(bind=engine)

app.include_router(userrouter , prefix="/user")

# app.include_router(insurance_router , prefix='/insurance', dependencies=[Depends(auth_middleware)])
app.include_router(insurance_router , prefix='/insurance')
