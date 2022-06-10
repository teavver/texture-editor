"use strict";
const canvas = document.getElementById('canvas');
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
function drawTiles(ctx) {
    // #34495e classic color
    ctx.fillStyle = "#34495e";
    // ctx.fillRect(0,0,32,32);
    // const canvasWidth = 32 as number;
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
document.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    console.log([mouseX, mouseY]);
});
