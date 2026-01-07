from fastapi import Session , Depends , HTTPException
from app.Models.user import UserModel
from app.Schemas.user import UserSchema
from app.Config.dbconfig import get_db


def handle_user_signup(payload , db : Session = Depends(get_db)):
    user_pydantic = UserSchema(**payload).model_dump()
    user_model = UserModel(**user_pydantic)

    if user_model is None:
        raise HTTPException(status_code=400 , detail = "Invalid Data Provided")

    db.add(user_model)
    db.commit()

    raise HTTPException(status=201 , detail="User Created Successfully!!!")



