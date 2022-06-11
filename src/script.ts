// import gui from "./gui";

const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
const canvasDiv: HTMLElement | null = document.querySelector("canvas")
const ctx:CanvasRenderingContext2D = canvas?.getContext("2d") as CanvasRenderingContext2D;
canvas!.height = 960
canvas!.width = 960

let selectedBrush:number = 1
let mouseDown:number = 0;

document.body.onmousedown = function(event) {
    let mousePosition = getMousePos(event);   
    ++mouseDown;
    console.log(mouseDown)
}
document.body.onmouseup = function() {
  --mouseDown;
  console.log(mouseDown)
}

// document.querySelector('canvas')!.style.cursor = "none";


// checkerboard
function drawTiles(ctx:CanvasRenderingContext2D){
    ctx.fillStyle = "#34495e";

    const nRow:number = 32;    
    const nCol:number = 32;

    const width:number = 32;
    const height:number = 32;

    for (var i = 0; i < nRow; ++i) {
        for (var j = 0, col = nCol / 2; j < col; ++j) {
            ctx.rect(2 * j * width + (i % 2 ? 0 : width), i * height, width, height);
        }
    }
    ctx.fill();
}
drawTiles(ctx)


// mousepos + cursor 
function getMousePos(event:MouseEvent) {
    var rect = canvas?.getBoundingClientRect();
    return {
      x: Math.round((event.clientX - rect!.left) / 32.5 ) ,
      y: Math.round((event.clientY - rect!.top) / 32.5)
      
    };
    
    
}

canvas?.addEventListener("mousemove", (event:MouseEvent) => {
    let mousePosition = getMousePos(event);
    // console.log(getMousePos(event));
    // ctx.strokeRect(mousePosition.x*32,mousePosition.y*32,32,32)
  });

  canvas?.addEventListener("click", (event:MouseEvent) => {
    let mousePosition = getMousePos(event);
    if(selectedBrush == 0) {
        // console.log("erasing")
        // ctx.fillStyle = "#34495e";
        // ctx?.fillRect(mousePosition.x * 32, mousePosition.y * 32,32,32)
    }
    if(selectedBrush == 1) {
        // ctx.fillStyle = "rgba(255,255,255)"
        // ctx?.fillRect(mousePosition.x * 32, mousePosition.y * 32,32,32)
    }    
  });