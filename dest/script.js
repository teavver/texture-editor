"use strict";
const canvas = document.getElementById('canvas');
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
// disable cursor on canvas
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
canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener("mousemove", (event) => {
    let mousePosition = getMousePos(event);
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(mousePosition.x * 32, mousePosition.y * 32, 32, 32);
    ctx.fillStyle = "grey";
    // ctx.clearRect(0, 0, 960, 960)
    // ctx.fillStyle = "black" // 50% transparency hover
    // onclick - > narysuj
    console.log(getMousePos(event));
});
const canvasDiv = document.querySelector("canvas");
let cursorInside = false;
function getMousePos(event) {
    var rect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
    return {
        x: Math.round((event.clientX - rect.left) / 33),
        y: Math.round((event.clientY - rect.top) / 33)
    };
}
