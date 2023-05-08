import * as tf from '@tensorflow/tfjs';

export async function toFahrenheit(model) {
  try {
    console.log("Cargando modelo...");
    const modelJson = JSON.stringify(model);
    const modelo = await tf.loadLayersModel(tf.io.fromMemory(JSON.parse(modelJson)));
    console.log("Modelo cargado...");
  
    const celsius = document.getElementById("celsius").value;
    document.getElementById("lbl-celsius").innerHTML = celsius;
  
    const tensor = tf.tensor1d([parseInt(celsius)]);
    const prediccion = modelo.predict(tensor).dataSync();
    const resultado = Math.round(prediccion[0], 1);
  
    document.getElementById("resultado").innerHTML = `${celsius} celsius son ${resultado} fahrenheit!`;
  } catch (error) {
    console.error(error);
    document.getElementById("resultado").innerHTML = "Intenta de nuevo en un momento...";
  }
}
