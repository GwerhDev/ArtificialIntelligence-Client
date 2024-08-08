import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import terminalkillerlogoDesktop from "../../../assets/image/png/terminalkiller-logo.png";
import terminalkillerlogoMobile from "../../../assets/image/png/terminalkiller-logo-transparent-v.png";

export const Head = () => {
    return (
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1.5 }} animate={{ opacity: 1 }}>
            <header>
                <Link to="/">
                    <img
                        className="mx-auto mb-5 mt-5 desktop"
                        src={terminalkillerlogoDesktop}
                        alt="" height="150"
                    />
                    <img
                        className="mx-auto mb-5 mt-5 mobile"
                        src={terminalkillerlogoMobile}
                        alt="" width="250"
                    />
                </Link>
            </header>
        </motion.div>
    )
}