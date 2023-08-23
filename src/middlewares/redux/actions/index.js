import * as tf from '@tensorflow/tfjs';
import { URL_API } from '../../config/config'
import { GET_MODEL_CELSIUSTOFAHRENHEIT } from '../../misc/consts'

export const getModelCelciusToFahrenheit = () => {
    return async function (dispatch) {
        await tf.loadLayersModel(`${URL_API}/celsiustofahrenheit/model`)
        .then(res => {
            dispatch({
                type: GET_MODEL_CELSIUSTOFAHRENHEIT,
                payload: res
            })
        })
        .catch((e)=>{
            console.error(e)
        })
    }
}