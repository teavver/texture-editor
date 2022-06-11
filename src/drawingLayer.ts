import backgroundLayer from "./backgroundLayer";

export default class drawingLayer extends backgroundLayer {

    public brushId:number

        constructor(_domCtx:CanvasRenderingContext2D, _brushId:number){
            super(_domCtx);
            this.brushId = _brushId
            

            
        }

}