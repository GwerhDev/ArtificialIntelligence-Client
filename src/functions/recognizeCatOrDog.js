import * as tf from '@tensorflow/tfjs';
import { URL_API } from '../middlewares/misc/config';

export async function recognizeCatOrDog () {
    try {
        const modelo = await tf.loadLayersModel(`${URL_API}/recognizecatordog/model`);
        return modelo
    } catch (error) {
        console.log(error)
    }
}

