import BackgroundLayer from "./BackgroundLayer";
import DrawingLayer from "./DrawingLayer";

let mouseDown:boolean = false;
let selectedBrush:number = 1;

// document.querySelector('canvas')!.style.cursor = "none";
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx:CanvasRenderingContext2D = canvas?.getContext("2d") as CanvasRenderingContext2D;
canvas!.height = 960
canvas!.width = 960
const backgroundLayer = new BackgroundLayer()
const drawingLayer = new DrawingLayer()

function updateLayers():void{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundLayer.getCanvas(), 0, 0)
    ctx.drawImage(drawingLayer.getCanvas(), 0, 0)
}

updateLayers()


// mousepos + cursor

function getMousePos(event:MouseEvent):{x:number, y:number}{
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((event.clientX - rect!.left) / 32) ,
        y: Math.round((event.clientY - rect!.top) / 32)
    };
}

function changeBrush(_id:number){
    selectedBrush = _id
}

 document.addEventListener("mousedown", (event:MouseEvent) => {

        mouseDown = true;

        document.addEventListener("mousemove", (event:MouseEvent) => {

            let mousePosition = getMousePos(event);

            if(mouseDown == true){
                if(selectedBrush == 0){
                    
                    drawingLayer.getCtx().clearRect((mousePosition.x * 32),(mousePosition.y * 32),32,32)
                    updateLayers()
                }

                if(selectedBrush == 1){
                    drawingLayer.getCtx().fillStyle = "#FFFFFF";
                    drawingLayer.getCtx().fillRect((mousePosition.x * 32),(mousePosition.y * 32),32,32)
                    updateLayers()
                }

            }
        })

        document.addEventListener("mouseup", (event:MouseEvent) => {
            mouseDown = false
        })

    })

    canvas.addEventListener("click", (event:MouseEvent) => {
    let mousePosition = getMousePos(event);
    if(selectedBrush == 0) {
        drawingLayer.getCtx().clearRect(mousePosition.x * 32, mousePosition.y * 32,32,32)
    }
    if(selectedBrush == 1) {
        // ctx.fillStyle = "rgba(255,255,255)"
        drawingLayer.getCtx().fillRect(mousePosition.x * 32, mousePosition.y * 32,32,32)
    }    
    });


document.getElementById("gui-brush")?.addEventListener("click", (e:Event) => {
    changeBrush(1)
    console.log("brush selected")
})

document.getElementById("gui-eraser")?.addEventListener("click", (e:Event) => {
    changeBrush(0)
    console.log("eraser selected")
})

document.getElementById("button-reset")?.addEventListener("click", (e:Event) =>{ 
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawingLayer.clear()
    updateLayers()
})