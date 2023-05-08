import { useEffect } from "react";
import { toFahrenheit } from "../functions/toFahrenheit"
import { useDispatch, useSelector } from 'react-redux';
import { getModelCelciusToFahrenheit } from "../middlewares/redux/actions";

export const CelciusToFahrenheit = () => {
    const dispatch = useDispatch()
    const celciusToFahrenheitModel = useSelector(state=>state.celciusToFahrenheitModel)
    useEffect(()=>{
        dispatch(getModelCelciusToFahrenheit())
    },[dispatch])

    return(
        <main>
            <div className="px-4 py-2 my-2 text-center border-bottom">
            <img className="d-block mx-auto mb-2" src="favicon.ico" alt="" width="80" height="80" />
            <h1 className="display-5 fw-bold">Celsius a Fahrenheit</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-0">Conversi&oacute;n de grados celsius a fahrenheit utilizando Tensorflow.js</p>
            </div>
            </div>
  
            <div className="b-example-divider"></div>
  
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="celsius" className="form-label">Grados Celsius: <span id="lbl-celsius">0</span></label>
                                <input type="range" className="form-range" min="-200" max="200" id="celsius" onInput={()=> {return toFahrenheit(celciusToFahrenheitModel)}} />
                                <div className="form-text">Desliza para cambiar el valor de grados celsius</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="celsius" className="form-label">Resultado</label>
                                <div id="resultado">
                                    0 grados celsius son 32 grados fahrenheit
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="b-example-divider" />
            <div className="b-example-divider mb-0"/>

        </main>
    )
}