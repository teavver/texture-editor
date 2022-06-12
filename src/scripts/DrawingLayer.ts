import Layer from "./Layer";
export default class DrawingLayer extends Layer {

    domCanvas:HTMLCanvasElement
    selectedBrush:number = 1

    constructor(_domCtx:CanvasRenderingContext2D,_domCanvas:HTMLCanvasElement){
        super(_domCtx)
        this.domCanvas = _domCanvas

        this.mouseDrawEvents()
    }


    private getMousePos(event:MouseEvent) {
        var rect = this.domCanvas.getBoundingClientRect();
        return {
            x: Math.round((event.clientX - rect!.left) / 32) ,
            y: Math.round((event.clientY - rect!.top) / 32)
        };
    }

    public changeBrush(_brush:number):void{
        this.selectedBrush = _brush
    }

    private mouseDrawEvents(){

    
    let mouseDown:boolean = false;
    
    document.addEventListener("mousedown", (event:MouseEvent) => {
        let mousePosition = this.getMousePos(event);

        mouseDown = true;

        document.addEventListener("mousemove", (event:MouseEvent) => {
            if(mouseDown == true){
                if(this.selectedBrush == 0){
                    this.ctx.fillStyle = "#34495e";
                } 
                if (this.selectedBrush == 1){
                    this.ctx.fillStyle = "#FFFFFF";
                }
                let mousePosition = this.getMousePos(event); 
                // console.log(mousePosition)
                this.ctx.fillRect((mousePosition.x * 32),(mousePosition.y * 32),32,32)
                this.drawOnDomCanvas()
            }
        })

        document.addEventListener("mouseup", (event:MouseEvent) => {
            mouseDown = false
        })
    })
    
    this.domCanvas.addEventListener("mousemove", (event:MouseEvent) => {
        let mousePosition = this.getMousePos(event);
    });
            
    this.domCanvas.addEventListener("click", (event:MouseEvent) => {
    let mousePosition = this.getMousePos(event);
    if(this.selectedBrush == 0) {
        this.ctx.fillStyle = "#34495e";
        this.ctx.fillRect(mousePosition.x * 32, mousePosition.y * 32,32,32)
        this.drawOnDomCanvas()
    }
    if(this.selectedBrush == 1) {
        this.ctx.fillStyle = "rgba(255,255,255)"
        this.ctx.fillRect(mousePosition.x * 32, mousePosition.y * 32,32,32)
        this.drawOnDomCanvas()
    }    
    });
    }
}