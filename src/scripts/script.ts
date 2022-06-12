import BackgroundLayer from "./BackgroundLayer";
import DrawingLayer from "./DrawingLayer";


// document.querySelector('canvas')!.style.cursor = "none";
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx:CanvasRenderingContext2D = canvas?.getContext("2d") as CanvasRenderingContext2D;
canvas!.height = 960
canvas!.width = 960
const backgroundLayer = new BackgroundLayer(ctx)
const drawingLayer = new DrawingLayer(ctx, canvas as HTMLCanvasElement)

// mousepos + cursor 


  document.getElementById("gui-brush")?.addEventListener("click", (e:Event) => {
    drawingLayer.changeBrush(1)
    console.log("brush selected")
})

document.getElementById("gui-eraser")?.addEventListener("click", (e:Event) => {
    drawingLayer.changeBrush(0)
    console.log("eraser selected")
})

document.getElementById("button-reset")?.addEventListener("click", (e:Event) =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawingLayer.clear()
    backgroundLayer.drawOnDomCanvas()
})