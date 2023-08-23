import React from 'react';
import { UploadImage } from '../components/UploadImage/UploadImage';

export const RemoveBackground = () => {
  return (
    <main>
      <div className="px-4 py-2 my-2 text-center border-bottom">
        <h1 className="display-5 fw-bold">Quitar fondo de imagen</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-0">Sube una imagen y quita el fondo utilizando Tensorflow.js</p>
        </div>
      </div>
      <UploadImage/>
    </main>
  )
}
