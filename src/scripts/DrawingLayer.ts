import Layer from "./Layer";
export default class DrawingLayer extends Layer {

    domCanvas:HTMLCanvasElement
    selectedBrush:number = 1

    constructor(){
        super()
    }
}