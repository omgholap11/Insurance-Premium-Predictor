from fastapi import APIRouter , Depends
from app.Config.dbconfig import get_db
from sqlalchemy.orm import Session
from app.Schemas.InsuranceProfile import InsuranceProfileSchema
from app.Controller.insurance_handler import handle_insurance_premium_prediction

insurance_router = APIRouter()

@insurance_router.post("/predict")
def insurance_premium_prediction(
    payload : InsuranceProfileSchema ,
    db : Session =  Depends(get_db)
):
    return handle_insurance_premium_prediction(payload , db)