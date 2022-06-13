export default class Layer {

    protected canvas:HTMLCanvasElement;
    protected ctx:CanvasRenderingContext2D; 
    // ^  graficzna reprezentacja canvasu (na nim rysownaie)
    protected tileSize:number = 32;

    constructor(){
        this.createLayer()
    }
 
    public getCtx():CanvasRenderingContext2D{
        return this.ctx
    }

    public getCanvas():HTMLCanvasElement{
        return this.canvas
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