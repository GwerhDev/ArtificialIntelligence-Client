import { motion } from "framer-motion"
import { Board } from "../components/Board/Board"
import { BackButton } from "../components/Buttons/BackButton"
import { handleDrawing } from "../../functions/recognizeNumber"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getModelRecognizeNumber } from "../../middlewares/redux/actions"

export const RecognizeNumber = () => {
  const recognizeNumberModel = useSelector(state => state.recognizeNumberModel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModelRecognizeNumber())
  }, [dispatch]);

  return (
    <main className="main-container">
      <motion.div
      initial={{opacity:0}}
      transition={{duration: 1.5}}
      animate={{opacity:1}}
      >
      <div className="px-4 py-2 my-2 text-center border-bottom">
        <h1 className="display-5 fw-bold">Reconocimiento de N&uacute;meros</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-0">Predicci&oacute;n de n&uacute;meros utilizando Tensorflow.js</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <div id="canvas-container">
              <div><i>Dibuja un d&iacute;gito legible para obtener una mejor predicci&oacute;n</i></div>
                <Board/>
            </div>
            <div className="text-center mt-3" style={{display:"flex", justifyContent:"center"}}>
              <div id="result-recognize-number"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className={"button-primary"} id="predecir" onClick={()=>handleDrawing(recognizeNumberModel)}>Predecir</button>
        <BackButton/>
      </div>

    </motion.div>
    </main>
  )
}