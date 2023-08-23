import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import terminalkillerlogo from "../../../assets/image/png/terminalkiller-logo.png";

export const Head = () => {
    return (
        <motion.div initial={{opacity:0}} transition={{duration: 1.5}} animate={{opacity:1}}>
            <header>
                <Link to="/">
                    <img 
                        className="d-block mx-auto mb-2 mt-5" 
                        src={terminalkillerlogo}
                        alt="" height="130" 
                    />
                </Link>
            </header>
        </motion.div>
    )
}