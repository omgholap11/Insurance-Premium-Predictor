import pandas as pd
import pickle
import os
from fastapi.responses import JSONResponse

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MODEL_PATH = os.path.join(BASE_DIR, "ML-Model", "model.pkl")

with open(MODEL_PATH, 'rb') as f:
    model = pickle.load(f)

def handle_insurance_premium_prediction(payload , db):
    input_df = pd.DataFrame([{
        'bmi' : payload.bmi,
        'age_group' : payload.age_group,
        'lifestyle_risk' : payload.lifestyle_risk,
        'city_tier' : payload.city_tier,
        'income_lpa' : payload.income_lpa,
        'occupation' : payload.occupation
    }])

    response = model.predict(input_df)[0]

    return JSONResponse(
        status_code=200,
        content={'prediction' : response}
    )


