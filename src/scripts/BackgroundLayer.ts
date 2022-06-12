import Layer from "./Layer";

export default class BackgroundLayer extends Layer{

    constructor(_domCtx:CanvasRenderingContext2D){
        super(_domCtx)

        this.drawTiles()
        this.drawOnDomCanvas()
    }

    private drawTiles(){
        this.ctx.fillStyle = "#34495e";
    
        const nRow:number = 32;    
        const nCol:number = 32;
    
        const width:number = 32;
        const height:number = 32;
    
        for (var i = 0; i < nRow; ++i) {
            for (var j = 0, col = nCol / 2; j < col; ++j) {
                this.ctx.fillRect(2 * j * width + (i % 2 ? 0 : width), i * height, width, height);
            }
        }
    }
    
}