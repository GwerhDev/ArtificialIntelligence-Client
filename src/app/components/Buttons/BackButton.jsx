import { Link } from "react-router-dom"

export const BackButton = () => {
    return (
        <Link to="/ai-testing/">
            <button className="button-secundary">Volver</button>
        </Link>
    )
}