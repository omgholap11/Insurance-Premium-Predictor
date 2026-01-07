from fastapi import  Depends , HTTPException
from app.Models.user import UserModel
from app.Schemas.user import UserSchema
from app.Config.dbconfig import get_db
from sqlalchemy.orm import Session


def handle_user_signup(payload , db : Session):
    print(payload)
    user_model = UserModel(**payload.model_dump())

    if user_model is None:
        raise HTTPException(status_code=400 , detail = "Invalid Data Provided")

    print("ommiiiiiiiii......")
    db.add(user_model)
    db.commit()

    return {"msg" : "Signed up successfully!!!"}

def handle_user_sign_in(payload , db : Session):
    return "success"

