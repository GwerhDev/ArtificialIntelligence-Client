import * as tf from '@tensorflow/tfjs';

export async function toFahrenheit(model) {
  try {  
    const celsius = document.getElementById("celsius").value;
    document.getElementById("lbl-celsius").innerHTML = celsius;
  
    const tensor = tf.tensor1d([parseInt(celsius)]);
    const prediccion = model.predict(tensor).dataSync();
    const resultado = Math.round(prediccion[0], 1);
  
    document.getElementById("result-celcius-to-fahrenheit").innerHTML = `${celsius} grados celsius son ${resultado} grados fahrenheit!`;
  } catch (error) {
    console.error(error);
    document.getElementById("result-celcius-to-fahrenheit").innerHTML = "Intenta de nuevo en un momento...";
  }
}
