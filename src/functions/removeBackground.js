

export function imageLoaded(image, threshold) {
  var canvas = document.getElementById("canvas-removebackground");
  var ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;
  
  ctx.drawImage(image, 0, 0, image.width, image.height);

  blackAndWhite(canvas);

  var result = document.getElementById("result-removebackground");

  conv(canvas, result, threshold)
}

function blackAndWhite(canvas) {
  var ctx = canvas.getContext("2d");
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  ctx.putImageData(imageData, 0, 0);
}

function conv(canvasSrc, canvasResult, threshold) {
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

      pixelsResult[idx] = magnitude;
      pixelsResult[idx+1] = magnitude;
      pixelsResult[idx+2] = magnitude;
      pixelsResult[idx+3] = 255;
    }
  }
  
  ctxResult.putImageData(imageDataResult, 0, 0);
}