import React, { useEffect, useState } from 'react';
import s from './UploadImage.module.css';
import { imageLoaded } from '../../../functions/removeBackground';

export const UploadImage = () => {
  const [threshold, setThreshold] = useState(0);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          imageLoaded(img, threshold);
        };
      };
    }
  }, [image, threshold]);

  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <div className={s.containerImgInput}>
          <canvas id='canvas-removebackground'></canvas>
          <input className="form-file mt-4" type="file" onChange={(e) => setImage(e.target.files[0])}/>
          <div className={`mt-5 d-flex justify-content-center align-items-center ${s.inputs}`}>
            <label htmlFor="threshold" className="form-label">Límite: </label>
            <input type="range" defaultValue='0' className="form-range" min="0" max="200" id="threshold" onInput={(e) => setThreshold(e.target.value)} />
            <div className="form-text" style={{ textShadow: "0px 0px 1px green", color: "white" }}><span id="lbl-threshold">{threshold}</span></div>
          </div>
        </div>
        <div className={s.containerImgViewer}>
          <canvas id='result-removebackground'></canvas>
        </div>
      </div>
    </div>
  );
};