import { Link } from "react-router-dom"
import s from "./css/Home.module.css"

export const Home = () => {
    return (
        <div>
            <h1 className="display-5 fw-bold">Testing AI y Componentes</h1>
            <ul style={{listStyle:"none", padding:"100px"}}>
                <li>
                    <Link to="/celsiustofahrenheit">
                       <button className={s.buttonPrimary}>
                            Convertidor de Celsius a Fahrenheit
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/recognizenumber">
                        <button className={s.buttonPrimary}>
                            Reconocedor de números
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}