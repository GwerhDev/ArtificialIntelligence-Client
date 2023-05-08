import { GET_MODEL_CELCIUSTOFAHRENHEIT } from "../../misc/consts"

const initialState = {
    celciusToFahrenheitModel: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_MODEL_CELCIUSTOFAHRENHEIT:
            return{
                ...state,
                celciusToFahrenheitModel: action.payload
            }
        default:
            return {...state}
    }
}