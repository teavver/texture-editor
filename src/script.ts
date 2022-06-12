// document.querySelector('canvas')!.style.cursor = "none";
const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
const ctx:CanvasRenderingContext2D = canvas?.getContext("2d") as CanvasRenderingContext2D;
canvas!.height = 960
canvas!.width = 960


let selectedBrush:number = 1
let mouseDown:boolean = false;

document.body.onmousedown = function(event) {
    let mousePosition = getMousePos(event);
    mouseDown = true;
    canvas?.addEventListener('mousemove', (event) => {
        if(mouseDown == true){
            if(selectedBrush == 0){
                ctx.fillStyle = "#34495e";
            } 
            if (selectedBrush == 1){
                ctx.fillStyle = "#FFFFFF";
            }
            let mousePosition = getMousePos(event); 
            // console.log(mousePosition)
            ctx?.fillRect((mousePosition.x * 32),(mousePosition.y * 32),32,32)
        }
    })
}

document.body.onmouseup = function() {
  mouseDown = false;
}

// mousepos + cursor 
function getMousePos(event:MouseEvent) {
    var rect = canvas?.getBoundingClientRect();
    return {
      x: Math.round((event.clientX - rect!.left) / 32) ,
      y: Math.round((event.clientY - rect!.top) / 32)
    };
}

canvas?.addEventListener("mousemove", (event:MouseEvent) => {
    let mousePosition = getMousePos(event);
  });

  canvas?.addEventListener("click", (event:MouseEvent) => {
    let mousePosition = getMousePos(event);
    if(selectedBrush == 0) {
        ctx.fillStyle = "#34495e";
        ctx?.fillRect(mousePosition.x * 32, mousePosition.y * 32,32,32)
    }
    if(selectedBrush == 1) {
        ctx.fillStyle = "rgba(255,255,255)"
        ctx?.fillRect(mousePosition.x * 32, mousePosition.y * 32,32,32)
    }    
  });

  document.getElementById("gui-brush")?.addEventListener("click", (e:Event) => {
    selectedBrush = 1
    console.log("brush selected")
})

document.getElementById("gui-eraser")?.addEventListener("click", (e:Event) => {
    selectedBrush = 0
    console.log("eraser selected")
})