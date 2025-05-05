import shutil
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse

import AIris

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  )

@app.get("/predecir/{path}")
def predecir(path):
   path = "./Data/" + path
   model = AIris.AIrisModel()
   predicciones=model.make_prediction(path)
   return predicciones


@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        path = f"./Data/{file.filename}"
        with open(path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        return {"mensaje": "Archivo guardado con éxito", "filename": file.filename}
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)