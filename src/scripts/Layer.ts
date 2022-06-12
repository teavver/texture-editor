export default class Layer {

    protected canvas:HTMLCanvasElement;
    protected ctx:CanvasRenderingContext2D; 
    // ^  graficzna reprezentacja canvasu (na nim rysownaie)
    protected domCtx:CanvasRenderingContext2D;
    protected tileSize:number = 32;

    constructor(_domCtx:CanvasRenderingContext2D){
        this.domCtx = _domCtx
        this.createLayer()
    }

    public drawOnDomCanvas():void{
        this.domCtx.drawImage(this.canvas, 0, 0)
    }

    public clear():void{
        this.ctx.clearRect(0, 0, 960, 960)
    }


    protected createLayer(){
        let canvas:HTMLCanvasElement = document.createElement('canvas')
        canvas.width = 960
        canvas.height = 960
        let ctx:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
    
        this.canvas = canvas
        this.ctx = ctx
    }
}