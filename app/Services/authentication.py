from fastapi import HTTPException
import jwt
from datetime import datetime , timedelta
import os
from dotenv import load_dotenv
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"

def generate_access_token(data : dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(minutes=100)
    to_encode.update({"exp" : expire})

    jwt_token = jwt.encode(to_encode , SECRET_KEY , algorithm=ALGORITHM)

    print("Token:  " , jwt_token)
    return jwt_token    

def verify_access_token(token : str):
    try:
        payload = jwt.decode(token , SECRET_KEY , algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401 , detail="Token has expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401 , detail="Invalid Token")   