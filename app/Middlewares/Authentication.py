from fastapi import FastAPI , Request , HTTPException
from app.Services.authentication import verify_access_token
from fastapi.responses import JSONResponse


async def auth_middleware(req : Request):
    token_with_bearer = req.cookies.get('access_token')
    print("First Token >>>>   ",req.cookies['access_token'])
    print("Token>>>>   ",token_with_bearer)
    if not token_with_bearer:
        raise HTTPException(
            status_code=401 , 
            detail="Unauthorized - No token provided!!"
        )
    
    try:
        
        if token_with_bearer.startswith("Bearer "):
            token = token_with_bearer.split(" ")[1]
        else:
            token = token_with_bearer

        payload = verify_access_token(token)

        if payload is None:
            raise HTTPException(
                status_code=401,
                detail="Unauthorized - Invalid token"
            )
        print("Payload>>>>   ",payload)
        req.state.user = {
            "name": payload['name'],
            "email": payload['email'],
            "id": payload['id']
        }
    
    except HTTPException as e:

        raise e
    
    except Exception as e:
        print(f"Auth Error: {e}")
        raise HTTPException(
            status_code=401,
            detail="Unauthorized - Authentication failed"
        )