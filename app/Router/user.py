from app.Controller.user_handler import handle_user_signup , handle_user_sign_in
from fastapi import APIRouter  , Depends , Response
from  app.Schemas.user import UserSchema , UserSignIn
from app.Config.dbconfig import get_db
from sqlalchemy.orm import Session

userrouter = APIRouter()

@userrouter.post("/signup")
def signup(
    payload : UserSchema,
    db : Session = Depends(get_db)
):
    return handle_user_signup(payload , db)

@userrouter.post("/signin")
def signin(
    payload : UserSignIn,
    response : Response,    
    db : Session = Depends(get_db)
):
    return handle_user_sign_in(payload , db , response)
