"use strict";
// import gui from "./gui";
const canvas = document.getElementById('canvas');
const canvasDiv = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
canvas.height = 960;
canvas.width = 960;
let selectedBrush = 1;
let mouseDown = false;
document.body.onmousedown = function (event) {
    let mousePosition = getMousePos(event);
    mouseDown = true;
    console.log(mouseDown);
    canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mousemove', (event) => {
        if (mouseDown == true) {
            let mousePosition = getMousePos(event);
            console.log(mousePosition);
            ctx.fillStyle = "rgba(255,255,255)";
            ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(mousePosition.x * 32, mousePosition.y * 32, 32, 32);
        }
    });
};
document.body.onmouseup = function () {
    mouseDown = false;
    console.log(mouseDown);
};
// document.querySelector('canvas')!.style.cursor = "none";
// checkerboard
function drawTiles(ctx) {
    ctx.fillStyle = "#34495e";
    const nRow = 32;
    const nCol = 32;
    const width = 32;
    const height = 32;
    for (var i = 0; i < nRow; ++i) {
        for (var j = 0, col = nCol / 2; j < col; ++j) {
            ctx.rect(2 * j * width + (i % 2 ? 0 : width), i * height, width, height);
        }
    }
    ctx.fill();
}
drawTiles(ctx);
// mousepos + cursor 
function getMousePos(event) {
    var rect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
    return {
        x: Math.round((event.clientX - rect.left) / 32.5),
        y: Math.round((event.clientY - rect.top) / 32.5)
    };
}
canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener("mousemove", (event) => {
    let mousePosition = getMousePos(event);
    // console.log(getMousePos(event));
    // ctx.strokeRect(mousePosition.x*32,mousePosition.y*32,32,32)
});
canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener("click", (event) => {
    let mousePosition = getMousePos(event);
    if (selectedBrush == 0) {
        // console.log("erasing")
        ctx.fillStyle = "#34495e";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(mousePosition.x * 32, mousePosition.y * 32, 32, 32);
    }
    if (selectedBrush == 1) {
        ctx.fillStyle = "rgba(255,255,255)";
        ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(mousePosition.x * 32, mousePosition.y * 32, 32, 32);
    }
});
