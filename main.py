from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root(message : str):


    return {"message": message}