from fastapi import FastAPI , Request , Response , HTTPException
from app.Services.authentication import verify_access_token

app = FastAPI()

@app.middleware("http")
async def auth_middleware(req : Request , next):
    token = req.cookies['token']
    if token is None:
        raise HTTPException(status_code=401 , detail="Unauthorized User")
    
    try:
        payload = verify_access_token(token)
        if payload is None:
            raise HTTPException(status_code=401 , detail="Unauthorized User!!")
        
        req.user.name = payload.name
        req.user.email = payload.email
        req.user.id = payload.id
        return await next()
    
    except Exception as e:
        raise HTTPException(status_code=401 , detail="Unauthorized User!!")
