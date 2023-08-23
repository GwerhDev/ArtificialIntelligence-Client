import { GET_MODEL_CELSIUSTOFAHRENHEIT, GET_MODEL_RECOGNIZE_CAT_OR_DOG, GET_MODEL_RECOGNIZE_NUMBER } from "../../misc/consts"

const initialState = {
    celciusToFahrenheitModel: [],
    recognizeNumberModel: [],
    recognizeCatOrDogModel: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_MODEL_CELSIUSTOFAHRENHEIT:
            return{
                ...state,
                celciusToFahrenheitModel: action.payload
            }
        case GET_MODEL_RECOGNIZE_NUMBER:
            return{
                ...state,
                recognizeNumberModel: action.payload
            }
        case GET_MODEL_RECOGNIZE_CAT_OR_DOG:
            return{
                ...state,
                recognizeCatOrDogModel: action.payload
            }
        default:
            return {...state}
    }
}