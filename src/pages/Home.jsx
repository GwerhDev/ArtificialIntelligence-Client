import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Home = () => {
    return (
        <div>
            <motion.div
                initial={{opacity:0}}
                transition={{duration: 2.5}}
                animate={{opacity:1}}
            >
                <h1 className="display-5 fw-bold">Testing AI & Components</h1>
            </motion.div>
            <motion.div
                initial={{opacity:0, x:-15}}
                transition={{duration: .5}}
                animate={{opacity:1, x:0}}
            >
                <ul style={{listStyle:"none", padding:"100px"}}>
                    <li>
                        <Link to="/celsiustofahrenheit">
                        <button className={"buttonPrimary"}>
                                Convertidor de Celsius a Fahrenheit
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/recognizenumber">
                            <button className="buttonPrimary">
                                Reconocedor de números
                            </button>
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}