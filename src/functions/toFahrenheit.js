import * as tf from '@tensorflow/tfjs';
import { $d } from './DocumentCSS';

export async function toFahrenheit(model) {
  try {  
    const celsius = $d("celsius").value;
    $d("lbl-celsius").innerHTML = celsius;
  
    const tensor = tf.tensor1d([parseInt(celsius)]);
    const prediccion = model.predict(tensor).dataSync();
    const resultado = Math.round(prediccion[0], 1);
  
    $d("result-celcius-to-fahrenheit").innerHTML = `${celsius} grados celsius son ${resultado} grados fahrenheit!`;
  } catch (error) {
    console.error(error);
    $d("result-celcius-to-fahrenheit").innerHTML = "Intenta de nuevo en un momento...";
  }
}
