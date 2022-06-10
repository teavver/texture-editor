const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
const ctx = canvas?.getContext("2d");

function drawTiles(ctx:CanvasRenderingContext2D){
    // #34495e classic color
    ctx.fillStyle = "#34495e";
    // ctx.fillRect(0,0,32,32);
    // const canvasWidth = 32 as number;

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
drawTiles(ctx as CanvasRenderingContext2D)

document.addEventListener("mousemove", (event:MouseEvent) => {
    let mouseX = event.clientX; 
    let mouseY = event.clientY;
    console.log([mouseX, mouseY]);
  });

  