import * as tf from '@tensorflow/tfjs';
import { URL_API } from '../../config/config'
import { GET_MODEL_CELSIUSTOFAHRENHEIT, GET_MODEL_RECOGNIZE_CAT_OR_DOG, GET_MODEL_RECOGNIZE_NUMBER } from '../../misc/consts'

export const getModelCelciusToFahrenheit = () => {
  return async function (dispatch) {
    await tf.loadLayersModel(`${URL_API}/celsiustofahrenheit/model`)
      .then(res => {
        dispatch({
          type: GET_MODEL_CELSIUSTOFAHRENHEIT,
          payload: res
        })
      })
      .catch((e) => {
        console.error(e)
      })
  }
}

export const getModelRecognizeNumber = () => {
  return async function (dispatch) {
    await tf.loadLayersModel(`${URL_API}/recognizenumber/model`)
      .then(res => {
        dispatch({
          type: GET_MODEL_RECOGNIZE_NUMBER,
          payload: res
        })
      })
      .catch((e) => {
        console.error(e)
      })
  }
}

export const getModelRecognizeCatOrDog = () => {
  return async function (dispatch) {
    await tf.loadLayersModel(`${URL_API}/recognizecatordog/model`)
      .then(res => {
        dispatch({
          type: GET_MODEL_RECOGNIZE_CAT_OR_DOG,
          payload: res
        })
      })
      .catch((e) => {
        console.error(e)
      })
  }

}