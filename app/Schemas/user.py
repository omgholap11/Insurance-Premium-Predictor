## Models are the pydantic classes and the Schemas are database models 
## so here is the pydantic user model
from pydantic import BaseModel , EmailStr , Field

class UserSchema(BaseModel):
    name : str = Field(... , description="Name of the user")
    email : EmailStr = Field(... , description="Email of the user")
    password : str = Field(... , description="Password of the user")
    