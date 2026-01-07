from fastapi import FastAPI
import pickle

app = FastAPI()

with open("./ML-Model/model.pkl", "rb") as f:
    model = pickle.load(f)


