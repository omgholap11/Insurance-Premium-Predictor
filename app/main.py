from fastapi import FastAPI
from app.Router.user import userrouter
from app.Config.database import engine
from app.Models.user import Base

app = FastAPI()


# Create all tables in the database
# it creates all the databases required initially right there 
Base.metadata.create_all(bind=engine)

app.include_router(userrouter , prefix="/user")


