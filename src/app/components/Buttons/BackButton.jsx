import { Link } from "react-router-dom"

export const BackButton = () => {
    return (
        <Link to="/ai-testing/">
            <button className="buttonBack">Volver</button>
        </Link>
    )
}