import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import s from "./css/Board.module.css"
import * as tf from '@tensorflow/tfjs';
import { URL_API } from "../middlewares/misc/config";

export function Board() {
  const [canvas, setCanvas] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "#5e445b",
    });

    newCanvas.isDrawingMode = true;
    newCanvas.freeDrawingBrush.width = 2;

    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  function handleClear() {
    if (canvas) {
      canvas.dispose();
      const newCanvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: "#5e445b",
      });
      newCanvas.isDrawingMode = true;
      newCanvas.freeDrawingBrush.width = 2;
      setCanvas(newCanvas);
    }
  }
  async function handleDrawing() {
    try {
      var canvas = document.getElementById("smallcanvas");
      var smallcanvas = document.getElementById("smallcanvas");
      var ctx2= smallcanvas.getContext("2d");
      
      console.log("Cargando modelo...");
      const modelo = await tf.loadLayersModel(`${URL_API}/recognizenumber/model`);
      console.log("Modelo cargado...");

      resample_single(canvas, 28, 28, smallcanvas);

      var imgData = ctx2.getImageData(0,0,28,28);
      var arr = [];
      var arr28 = [];
      for (var p=0; p < imgData.data.length; p+=4) {
        var valor = imgData.data[p+3]/255;
        arr28.push([valor]);
        if (arr28.length === 28) {
            arr.push(arr28);
            arr28 = [];
        }
    }

    arr = [arr];
    var tensor4 = tf.tensor4d(arr);
    var resultados = modelo.predict(tensor4).dataSync();
    var mayorIndice = resultados.indexOf(Math.max.apply(null, resultados));
    
    console.log("Prediccion", mayorIndice);
    document.getElementById("resultado").innerHTML = mayorIndice;
    function resample_single(canvas, width, height, resize_canvas) {
      var width_source = canvas.width;
      var height_source = canvas.height;
      width = Math.round(width);
      height = Math.round(height);
  
      var ratio_w = width_source / width;
      var ratio_h = height_source / height;
      var ratio_w_half = Math.ceil(ratio_w / 2);
      var ratio_h_half = Math.ceil(ratio_h / 2);
  
      var ctx = canvas.getContext("2d");
      var ctx2 = resize_canvas.getContext("2d");
      var img = ctx.getImageData(0, 0, width_source, height_source);
      var img2 = ctx2.createImageData(width, height);
      var data = img.data;
      var data2 = img2.data;
  
      for (var j = 0; j < height; j++) {
          for (var i = 0; i < width; i++) {
              var x2 = (i + j * width) * 4;
              var weight = 0;
              var weights = 0;
              var weights_alpha = 0;
              var gx_r = 0;
              var gx_g = 0;
              var gx_b = 0;
              var gx_a = 0;
              var center_y = (j + 0.5) * ratio_h;
              var yy_start = Math.floor(j * ratio_h);
              var yy_stop = Math.ceil((j + 1) * ratio_h);
              for (var yy = yy_start; yy < yy_stop; yy++) {
                  var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                  var center_x = (i + 0.5) * ratio_w;
                  var w0 = dy * dy; //pre-calc part of w
                  var xx_start = Math.floor(i * ratio_w);
                  var xx_stop = Math.ceil((i + 1) * ratio_w);
                  for (var xx = xx_start; xx < xx_stop; xx++) {
                      var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                      var w = Math.sqrt(w0 + dx * dx);
                      if (w >= 1) {
                          //pixel too far
                          continue;
                      }
                      //hermite filter
                      weight = 2 * w * w * w - 3 * w * w + 1;
                      var pos_x = 4 * (xx + yy * width_source);
                      //alpha
                      gx_a += weight * data[pos_x + 3];
                      weights_alpha += weight;
                      //colors
                      if (data[pos_x + 3] < 255)
                          weight = weight * data[pos_x + 3] / 250;
                      gx_r += weight * data[pos_x];
                      gx_g += weight * data[pos_x + 1];
                      gx_b += weight * data[pos_x + 2];
                      weights += weight;
                  }
              }
              data2[x2] = gx_r / weights;
              data2[x2 + 1] = gx_g / weights;
              data2[x2 + 2] = gx_b / weights;
              data2[x2 + 3] = gx_a / weights_alpha;
          }
      }
    }
  
  } catch (error) {
    console.error(error);
    document.getElementById("resultado").innerHTML = "Error, vuelve a intentarlo...";
  }
}
  
  
  
  return (
    <div className={s.boardContSup}>
      <ul className={s.boardCont} id="bigcanvas">
        <canvas
          ref={canvasRef}
          style={{ border: "1px solid black", borderTopLeftRadius: "15px" }}
          width={200}
          height={200}
          id="smallcanvas"
        />
        <button className={"buttonOptional"} onClick={handleClear}>Clear</button>
      </ul>
      <div style={{height:"50px", fontSize:"40px", marginBottom:"20px"}} id="resultado"></div>
      <button className={"buttonSecundary"} id="predecir" onClick={handleDrawing}>Predecir</button>
      <a href="/">
        <button className={"buttonBack"}>Volver</button>
      </a>
    </div>
  );
}
