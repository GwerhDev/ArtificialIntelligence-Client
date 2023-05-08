import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1 className="display-5 fw-bold">Testing AI y Componentes</h1>
            <ul style={{listStyle:"none", padding:"100px"}}>
                <li>
                    <Link to="/celsiustofahrenheit">
                        <button className="btn btn-primary" style={{color: "white", marginBottom: "10px"}}>
                            Convertidor de Celsius a Fahrenheit
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/recognizenumber">
                        <button className="btn btn-primary" style={{color: "white", marginBottom: "10px"}}>
                            Reconocedor de números
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}