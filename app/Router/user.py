from app.Controller.user_handler import handle_user_signup
from fastapi import APIRouter , Session , Depends
from  app.Schemas.user import UserSchema 
from app.Config.dbconfig import get_db

router = APIRouter()

@router.post("/signin")
def signin(
    payload : UserSchema,
    db : Session = Depends(get_db)
):
    return handle_user_signup(payload , db)