import axios from 'axios'
import { URL_API } from '../../misc/config'
import { GET_MODEL_CELCIUSTOFAHRENHEIT } from '../../misc/consts'

export const getModelCelciusToFahrenheit = () => {
    return async function (dispatch) {
        await axios.get(`${URL_API}/celciustofahrenheit`)
        .then(res => {
            dispatch({
                type: GET_MODEL_CELCIUSTOFAHRENHEIT,
                payload: res.data
            })
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}