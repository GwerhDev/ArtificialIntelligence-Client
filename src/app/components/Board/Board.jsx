import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import s from "./Board.module.css"
import { handleClear } from "../../../functions/recognizeNumber";

export function Board() {
  const [canvas, setCanvas] = useState(null);
  const canvasRef = useRef(null);
  const brushWidth = 10;

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "transparent",
    });
    
    newCanvas.isDrawingMode = true;
    newCanvas.freeDrawingBrush.width = brushWidth;

    setCanvas(newCanvas);
  }, []);

  return (
    <div className={s.boardContSup}>
      <ul className={s.boardCont} >
        <canvas
          ref={canvasRef}
          className={s.canvas}
          width={200}
          height={200}
          id="bigcanvas"
        />
        <button className="button-action" onClick={()=> handleClear(canvas, setCanvas, canvasRef, brushWidth)}>Borrar</button>
      </ul>
        <canvas id="smallcanvas" width="28" height="28" style={{display: "none"}}></canvas>
      <div style={{height:"50px", fontSize:"40px", marginBottom:"20px", textShadow:"0px 0px 10px green"}} id="result-recognize-number"></div>
    </div>
  );
}
