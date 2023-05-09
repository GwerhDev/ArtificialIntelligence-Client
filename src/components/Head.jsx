import { motion } from "framer-motion"

export const Head = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            transition={{duration: 1.5}}
            animate={{opacity:1}}
        >
            <div>
                <a href="http://projects.terminalkiller.site">
                    <img style={{marginTop:'5rem'}} className="d-block mx-auto mb-2" src="terminalkiller-logo.png" alt="" height="130" />
                </a>
            </div>
        </motion.div>

    )
}