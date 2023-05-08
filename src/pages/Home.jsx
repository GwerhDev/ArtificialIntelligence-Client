import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1 className="display-5 fw-bold">Test de app</h1>
            <ul style={{listStyle:"none", padding:"100px"}}>
                <li>
                    <Link to="/celsiustofahrenheit">
                        <button style={{color: "black"}}>
                            Convertidor de Celsius a Fahrenheit
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/recognizenumber">
                        <button style={{color: "black"}}>
                            Reconocedor de números
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}