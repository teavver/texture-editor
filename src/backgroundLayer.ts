export default class backgroundLayer {

    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    domCtx:CanvasRenderingContext2D;

    tileSize:number = 32;

    constructor(_domCtx:CanvasRenderingContext2D)
    {
        const [_ctx, _canvas] = this.createLayer();
        this.canvas = _canvas
        this.ctx = _ctx
        this.domCtx = _domCtx

        this.canvas.width = 960
        this.canvas.height = 960
    }
    private createLayer():[CanvasRenderingContext2D, HTMLCanvasElement]{
        let canvas:HTMLCanvasElement = document.createElement('canvas')
        let ctx:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
        return [ctx, canvas]
    }
}