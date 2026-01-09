from fastapi import FastAPI , Request , HTTPException
from app.Services.authentication import verify_access_token
from fastapi.responses import JSONResponse


async def auth_middleware(req : Request , call_next):
    token = req.cookies['token']
    if not token:
        return JSONResponse(
            status_code=401 , 
            content={"Details - Unauthorized No token provided!!"}
        )
    try:
        payload = verify_access_token(token)

        print(payload)

        if payload is None:
            return JSONResponse(
                status_code=401,
                content={"detail": "Unauthorized - Invalid token"}
            )
        
        req.state.user = {
            "name": payload.name,
            "email": payload.email,
            "id": payload.id
        }

        response = call_next(req)

        return response
    
    except HTTPException as e:
        return JSONResponse(
            status_code=e.status_code,
            content={"detail": e.detail}
        )
    
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"detail": f"Internal server error: {str(e)}"}
        )