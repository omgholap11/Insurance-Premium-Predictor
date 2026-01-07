from fastapi import   HTTPException , Response
from app.Models.user import UserModel
from sqlalchemy.orm import Session
from app.Services.authentication import generate_access_token


from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_hash_password(plain_password: str) -> str:
    """Hash a plain text password"""
    return pwd_context.hash(plain_password)

def verify_user_password(plain_password: str , hashed_password: str) -> bool:
    """Verify a plain text password against a hashed password"""
    return pwd_context.verify(plain_password , hashed_password )



def handle_user_signup(payload , db : Session):
    print(payload)                ## no data validation is required as we have created the pydantic model for the data that is applied at the 
    #router level which validates the data and is non validated returns the 422 data unprocessable error 

    existing_user = db.query(UserModel).filter(UserModel.email == payload.email).first()

    if existing_user:
        raise HTTPException(status_code=400 , detail = "User Already Exists")


    user_data = payload.model_dump()         ## pydantic objects are immutable right 


    password = payload.password
    hashed_password = get_hash_password(password)

    user_data['password'] = hashed_password

    user_model = UserModel(**user_data)

    if user_model is None:
        raise HTTPException(status_code=400 , detail = "Invalid Data Provided")

    db.add(user_model)
    db.commit()
    db.refresh(user_model)
    print("Data Saved to the Database: " , user_data)
    raise HTTPException(status_code=201 , detail="User Signed Up Successfully!!!")


def handle_user_sign_in(payload , db : Session , response : Response):

    existing_user = db.query(UserModel).filter(UserModel.email == payload.email).first()
    if existing_user is None:
        raise HTTPException(status_code=400 , detail = "User Not Found!!")

    new_user_password = payload.password
    old_user_password = existing_user.password

    if verify_user_password(new_user_password , old_user_password) is False:   
        raise HTTPException(status_code=400 , detail = "Incorrect Password")

    access_token = generate_access_token(data = {"name" : existing_user.name , "email" : existing_user.email , "id" : existing_user.id})

    response.set_cookie(
        key="access_token",
        value=f"Bearer {access_token}",
        httponly=True,   # Javascript cannot access it
        max_age=1800,    # 30 minutes in seconds
        expires=1800,
        samesite="lax",  # CSRF protection
        secure=False     # Set to True in production (HTTPS)
    )
    return {"message" : "User Signed In Successfully!!!"}