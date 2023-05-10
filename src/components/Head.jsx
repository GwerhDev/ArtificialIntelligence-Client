import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const Head = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            transition={{duration: 1.5}}
            animate={{opacity:1}}
        >
            <div>
                <Link to="/">
                    <img style={{marginTop:'5rem'}} className="d-block mx-auto mb-2" src="terminalkiller-logo.png" alt="" height="130" />
                </Link>
            </div>
        </motion.div>

    )
}