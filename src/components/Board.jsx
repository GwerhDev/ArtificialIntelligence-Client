import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import s from "./css/Board.module.css"

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
  
  return (
    <div className={s.boardCont}>
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid black" }}
        width={200}
        height={200}
      />
      <button className={"buttonOptional"} onClick={handleClear}>Clear</button>
    </div>
  );
}
