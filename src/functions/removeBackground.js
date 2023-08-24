import { $d } from "./DocumentCSS";

export function imageLoaded(image, threshold, editionOptions) {
  var canvas = $d("canvas-remove-background");
  var ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;
  
  ctx.drawImage(image, 0, 0, image.width, image.height);

  var result = $d("result-remove-background");

  convolution(canvas, result, editionOptions)
}

function blackAndWhite(canvas) {
  var ctx = canvas.getContext("2d");
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pixels = imageData.data;
  for(let i = 0; i < pixels.length; i += 4) {
    var avg = (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
    pixels[i] = avg;
    pixels[i+1] = avg;
    pixels[i+2] = avg;
  }

  ctx.putImageData(imageData, 0, 0);
}

function convolution(canvasSrc, canvasResult, editionOptions) {
  const { 
    blackAndWhiteState,
    threshold
  } = editionOptions;
  var ctxSrc = canvasSrc.getContext("2d");
  var imgDataSrc = ctxSrc.getImageData(0, 0, canvasSrc.width, canvasSrc.height);
  var pixelsSrc = imgDataSrc.data;

  canvasResult.width = canvasSrc.width;
  canvasResult.height = canvasSrc.height;

  var ctxResult = canvasResult.getContext("2d");
  var imageDataResult = ctxResult.createImageData(canvasResult.width, canvasResult.height);
  var pixelsResult = imageDataResult.data;

  var sobelY = [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
  ];

  var sobelX = [
    [-1,-2,-1],
    [ 0, 0, 0],
    [ 1, 2, 1]
  ];

  for (let y = 1; y < canvasSrc.height-1; y++) {
    for (let x = 1; x < canvasSrc.width-1; x++) {
      var idx = (y*canvasSrc.width + x)*4;

      var totalY = 0;
      var totalX = 0;

      for (let kernelY = 0; kernelY < 3; kernelY++) {
        for (let kernelX = 0; kernelX < 3; kernelX++) {
          totalY += sobelY[kernelY][kernelX] * pixelsSrc[(((((y+(kernelY-1))+kernelY)*canvasSrc.width)+(x+(kernelX-1))+kernelX)*4)];
          totalX += sobelX[kernelY][kernelX] * pixelsSrc[(((((y+(kernelY-1))+kernelY)*canvasSrc.width)+(x+(kernelX-1))+kernelX)*4)];
        }
      }

      var magnitude = Math.sqrt(totalY*totalY + totalX*totalX);
      
      magnitude = (magnitude < threshold) ? 0 : magnitude;
      
      pixelsResult[idx] = pixelsSrc[idx];
      pixelsResult[idx+1] = pixelsSrc[idx+1];
      pixelsResult[idx+2] = pixelsSrc[idx+2];
      pixelsResult[idx+3] = 255*magnitude;
    }
  }
  
  ctxResult.putImageData(imageDataResult, 0, 0);

  if(blackAndWhiteState) {
    blackAndWhite(canvasResult)
  }
}