import axios from 'axios'
import { URL_API } from '../../misc/config'
import { GET_MODEL_CELSIUSTOFAHRENHEIT } from '../../misc/consts'

export const getModelCelciusToFahrenheit = () => {
    return async function (dispatch) {
        await axios.get(`${URL_API}/celsiustofahrenheit`)
        .then(res => {
            dispatch({
                type: GET_MODEL_CELSIUSTOFAHRENHEIT,
                payload: res.data
            })
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}