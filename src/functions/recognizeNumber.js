import { fabric } from "fabric";
import * as tf from '@tensorflow/tfjs';
import { $d } from "./DocumentCSS";

export function handleClear(canvas, setCanvas, canvasRef, brushWidth) {
    canvas.dispose();
    const newCanvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: "transparent",
    });
    newCanvas.isDrawingMode = true;
    newCanvas.freeDrawingBrush.width = brushWidth;
    setCanvas(newCanvas);
    $d("result-recognize-number").style.opacity = "0"
}

function resample_single(canvas, width, height, resize_canvas) {
    var width_source = canvas.width;
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);

    var ratio_w = width_source / width;
    var ratio_h = height_source / height;
    var ratio_w_half = Math.ceil(ratio_w / 2);
    var ratio_h_half = Math.ceil(ratio_h / 2);

    var ctx = canvas.getContext("2d");
    var ctx2 = resize_canvas.getContext("2d");
    var img = ctx.getImageData(0, 0, width_source, height_source);
    var img2 = ctx2.createImageData(width, height);
    var data = img.data;
    var data2 = img2.data;

    for (var j = 0; j < height; j++) {
        for (var i = 0; i < width; i++) {
            var x2 = (i + j * width) * 4;
            var weight = 0;
            var weights = 0;
            var weights_alpha = 0;
            var gx_r = 0;
            var gx_g = 0;
            var gx_b = 0;
            var gx_a = 0;
            var center_y = (j + 0.5) * ratio_h;
            var yy_start = Math.floor(j * ratio_h);
            var yy_stop = Math.ceil((j + 1) * ratio_h);
            for (var yy = yy_start; yy < yy_stop; yy++) {
                var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                var center_x = (i + 0.5) * ratio_w;
                var w0 = dy * dy;
                var xx_start = Math.floor(i * ratio_w);
                var xx_stop = Math.ceil((i + 1) * ratio_w);
                for (var xx = xx_start; xx < xx_stop; xx++) {
                    var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                    var w = Math.sqrt(w0 + dx * dx);
                    if (w >= 1) {
                        continue;
                    }

                    weight = 2 * w * w * w - 3 * w * w + 1;
                    var pos_x = 4 * (xx + yy * width_source);

                    gx_a += weight * data[pos_x + 3];
                    weights_alpha += weight;

                    if (data[pos_x + 3] < 255)
                        weight = weight * data[pos_x + 3] / 250;
                    gx_r += weight * data[pos_x];
                    gx_g += weight * data[pos_x + 1];
                    gx_b += weight * data[pos_x + 2];
                    weights += weight;
                }
            }

            data2[x2] = gx_r / weights;
            data2[x2 + 1] = gx_g / weights;
            data2[x2 + 2] = gx_b / weights;
            data2[x2 + 3] = gx_a / weights_alpha;
        }
    }

    for (var p = 0; p < data2.length; p += 4) {
        var gris = data2[p];

        if (gris < 100) {
            gris = 0;
        } else {
            gris = 255;
        }

        data2[p] = gris;
        data2[p + 1] = gris;
        data2[p + 2] = gris;
    }
    ctx2.putImageData(img2, 0, 0);
}

export async function handleDrawing(model) {
    try {
        var bigcanvas = $d("bigcanvas");
        var smallcanvas = $d("smallcanvas");
        var ctx2 = smallcanvas.getContext("2d");

        resample_single(bigcanvas, 28, 28, smallcanvas);

        var imgData = ctx2.getImageData(0, 0, 28, 28);
        var arr = [];
        var arr28 = [];
        for (var p = 0; p < imgData.data.length; p += 4) {
            var valor = imgData.data[p + 3] / 255;
            arr28.push([valor]);
            if (arr28.length === 28) {
                arr.push(arr28);
                arr28 = [];
            }
        }

        arr = [arr];
        var tensor4 = tf.tensor4d(arr);
        var results = model.predict(tensor4).dataSync();
        var maxIndex = results.indexOf(Math.max.apply(null, results));

    } catch (error) {
        console.error(error);
        $d("result-recognize-number").style.opacity = "1"
        $d("result-recognize-number").innerHTML = "Error, vuelve a intentarlo...";
    }
    $d("result-recognize-number").style.opacity = "1"
    $d("result-recognize-number").innerHTML = `Es un ${maxIndex}`;
}
