import React from 'react';
import { UploadImage } from '../components/UploadImage/UploadImage';
import { motion } from "framer-motion";

export const RemoveBackground = () => {
  return (
    <main className="main-container">
      <motion.div initial={{opacity:0}} transition={{duration: 1.5}} animate={{opacity:1}}>
        <div className="px-4 py-2 my-2 mb-5 text-center border-bottom">
          <h1 className="display-5 fw-bold">Quitar fondo de imagen</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-0">Sube una imagen y quita el fondo utilizando Tensorflow.js</p>
          </div>
        </div>
        <UploadImage/>
      </motion.div>
    </main>
  )
}
