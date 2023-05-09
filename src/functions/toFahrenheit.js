import * as tf from '@tensorflow/tfjs';
import { URL_API } from '../middlewares/misc/config';

export async function toFahrenheit() {
  try {
    const modelo = await tf.loadLayersModel(`${URL_API}/celsiustofahrenheit/model`);
  
    const celsius = document.getElementById("celsius").value;
    document.getElementById("lbl-celsius").innerHTML = celsius;
  
    const tensor = tf.tensor1d([parseInt(celsius)]);
    const prediccion = modelo.predict(tensor).dataSync();
    const resultado = Math.round(prediccion[0], 1);
  
    document.getElementById("resultadoCTF").innerHTML = `${celsius} grados celsius son ${resultado} grados fahrenheit!`;
  } catch (error) {
    console.error(error);
    document.getElementById("resultadoCTF").innerHTML = "Intenta de nuevo en un momento...";
  }
}
