export default class BackgroundLayer {

    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D; 
    // ^  graficzna reprezentacja canvasu (na nim rysownaie)
    domCtx:CanvasRenderingContext2D;
    tileSize:number = 32;

    constructor(_domCtx:CanvasRenderingContext2D){
    
        this.domCtx = _domCtx


        this.createLayer()
        this.drawTiles();
        this.domCtx.drawImage(this.canvas, 0, 0)
    }


    private createLayer(){
        let canvas:HTMLCanvasElement = document.createElement('canvas')
        canvas.width = 960
        canvas.height = 960
        let ctx:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
    
        this.canvas = canvas
        this.ctx = ctx
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