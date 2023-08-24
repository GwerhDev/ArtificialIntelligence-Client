import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Home = () => {
    return (
        <div>
            <motion.div initial={{opacity:0}} transition={{duration: 2.5}} animate={{opacity:1}}>
                <h1 className="display-5 fw-bold">Testing AI & Components</h1>
            </motion.div>
            <motion.div initial={{opacity:0, x:-15}} transition={{duration: .5}} animate={{opacity:1, x:0}}>
                <ul style={{padding:"75px"}}>
                    <li>
                        <Link to="/ai-testing/celsiustofahrenheit">
                        <button className={"button-default pageList"}>
                                Convertidor de Celsius a Fahrenheit 🌡️
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ai-testing/recognizenumber">
                            <button className="button-default pageList">
                                Reconocedor de números 🔢
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ai-testing/recognizecatordog">
                            <button className="button-default pageList">
                                Reconocedor de Gato o Perro 😽🐶
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ai-testing/image-editor">
                            <button className="button-default pageList">
                                Editor de imagenes 📷
                            </button>
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}