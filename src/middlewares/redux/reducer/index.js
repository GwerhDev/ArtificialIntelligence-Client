import { GET_MODEL_CELSIUSTOFAHRENHEIT } from "../../misc/consts"

const initialState = {
    celciusToFahrenheitModel: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_MODEL_CELSIUSTOFAHRENHEIT:
            return{
                ...state,
                celciusToFahrenheitModel: action.payload
            }
        default:
            return {...state}
    }
}