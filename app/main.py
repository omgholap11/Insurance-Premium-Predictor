from fastapi import FastAPI , Depends
from app.Router.user import userrouter
from app.Config.database import engine
from app.Models.user import Base
from app.Router.ipprediction import insurance_router
from app.Middlewares.Authentication import auth_middleware
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  # Important for cookies/auth
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create all tables in the database
# it creates all the databases required initially right there 
Base.metadata.create_all(bind=engine)

app.include_router(userrouter , prefix="/user")


app.include_router(insurance_router , prefix='/insurance', dependencies=[Depends(auth_middleware)])  ## these dependencies are bacsically the middlewares that gets hit befor hittinh the desired router
