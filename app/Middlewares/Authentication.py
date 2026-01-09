from fastapi import FastAPI , Request , HTTPException
from app.Services.authentication import verify_access_token
from fastapi.responses import JSONResponse


async def auth_middleware(req : Request):
    print("Middleware Hitten by the requyest.....")
    token = req.cookies['token']
    if not token:
        raise HTTPException(
            status_code=401 , 
            detail={"Details - Unauthorized No token provided!!"}
        )
    try:
        payload = verify_access_token(token)

        print(payload)

        if payload is None:
            return HTTPException(
                status_code=401,
                detail={"detail": "Unauthorized - Invalid token"}
            )
        
        req.state.user = {
            "name": payload.name,
            "email": payload.email,
            "id": payload.id
        }
    
    except HTTPException as e:
        return HTTPException(
            status_code=e.status_code,
            detail={"detail": e.detail}
        )
    
    except Exception as e:
        return HTTPException(
            status_code=500,
            detail={"detail": f"Internal server error: {str(e)}"}
        )