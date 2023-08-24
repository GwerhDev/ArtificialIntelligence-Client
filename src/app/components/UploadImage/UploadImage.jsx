import React, { useEffect, useState } from 'react';
import s from './UploadImage.module.css';
import { imageLoaded } from '../../../functions/removeBackground';
import { BackButton } from '../Buttons/BackButton';
import { DownloadButton } from '../Buttons/DownloadButton';

export const UploadImage = () => {
  const [threshold, setThreshold] = useState(0);
  const [blackAndWhiteState, setBlackAndWhiteState] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const editOptions = {
      threshold: threshold,
      blackAndWhiteState: blackAndWhiteState
    }
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          imageLoaded(img, threshold, editOptions);
        };
      };
    }
  }, [image, threshold, blackAndWhiteState]);

  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <div className={s.containerImgInput}>
          <div className={s.containerCanvasImageViewer}>
            <canvas className={s.canvasImageViwer} id='canvas-remove-background'></canvas>
          </div>
          <input className="form-file mt-4" type="file" onChange={(e) => setImage(e.target.files[0])}/>
        </div>
        <div className={s.containerResult}>
          <div className={s.containerResultImgViewer}>
            <canvas className={s.resultImageViwer} id='result-remove-background'></canvas>
            <div className={`mt-5 d-flex align-items-center ${s.inputCheck} ${s.inputs}`}>
              <label htmlFor="b-n" className="form-label">B/N:</label>
              <input type="checkbox" defaultValue={false} className="form-checkbox" id="b-n" onChange={(e) => setBlackAndWhiteState(!blackAndWhiteState)} />
              <div className="form-text" style={{ color: "white" }}><span id="lbl-threshold">{blackAndWhiteState? 'Activado' : 'Desactivado'}</span></div>
            </div>

            <div className={`d-flex align-items-center ${s.titleFx}`}>
              <label htmlFor="threshold" className="form-label">Ejes: </label>
            </div>
            <div className={`d-flex justify-content-center align-items-center ${s.inputs}`}>
              <label htmlFor="threshold" className="form-label">Umbral: </label>
              <input type="range" defaultValue='0' className="form-range" min="0" max="255" id="threshold" onInput={(e) => setThreshold(e.target.value)} />
              <div className="form-text" style={{ textShadow: "0px 0px 1px green", color: "white" }}><span id="lbl-threshold">{threshold}</span></div>
            </div>
          </div>
          <div>
            <DownloadButton/>
            <BackButton/>
          </div>
        </div>
      </div>
    </div>
  );
};