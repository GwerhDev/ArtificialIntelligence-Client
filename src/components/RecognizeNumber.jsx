import { Link } from "react-router-dom"
import { limpiar, predecir } from "../functions/recognizeNumber"

export const RecognizeNumber = () => {
    return (
      <main>
        <div className="px-4 py-2 my-2 text-center border-bottom">
          <img className="d-block mx-auto mb-2" src="LogotipoV2-Simple.png" alt="" width="80" height="80" />
          <h1 className="display-5 fw-bold">N&uacute;meros escritos a mano</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-0">Predicci&oacute;n de n&uacute;meros escritos a mano utilizando Tensorflow.js</p>
          </div>
        </div>
  
        <div className="b-example-divider"></div>
  
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-4 offset-md-4">
              <div id="canvas-container">
                <div><i>Dibuja el n&uacute;mero grande y centrado para tener una mejor predicci&oacute;n</i></div>
                <canvas id="bigcanvas" width="200" height="200"></canvas>
                <canvas id="smallcanvas" width="28" height="28" style={{display: "none"}}></canvas>
              </div>
              <div class="text-center mt-3">
                <button className="btn btn-primary" id="limpiar" onClick={limpiar()}>Limpiar</button>
                <button className="btn btn-success" id="predecir" onClick={predecir()}>Predecir</button>
                <div id="resultado"></div>
              </div>
              
            </div>
          </div>
        </div>
  
        <div className="b-example-divider"></div>
  
        <div className="b-example-divider mb-0"></div>
        <Link to="/">
                <button>Volver</button>
        </Link>
      </main>
    )
}