const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
const ctx:CanvasRenderingContext2D = canvas?.getContext("2d") as CanvasRenderingContext2D;

// disable cursor on canvas
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
canvas?.addEventListener("mousemove", (event:MouseEvent) => {
    let mousePosition = getMousePos(event)
    ctx?.fillRect(mousePosition.x * 32, mousePosition.y * 32, 32 ,32)
    ctx.fillStyle = "grey"
    // ctx.clearRect(0, 0, 960, 960)
    // ctx.fillStyle = "black" // 50% transparency hover
    // onclick - > narysuj

    console.log(getMousePos(event))
  });

const canvasDiv: HTMLElement | null = document.querySelector("canvas")
let cursorInside:boolean = false;

function getMousePos(event:MouseEvent) {
    var rect = canvas?.getBoundingClientRect();
    return {
      x: Math.round((event.clientX - rect!.left) / 33 ) ,
      y: Math.round((event.clientY - rect!.top) / 33)
    };
}