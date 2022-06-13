function getMousePos(event:MouseEvent, canvas:HTMLCanvasElement):{x:number, y:number}{
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((event.clientX - rect!.left) / 32) ,
        y: Math.round((event.clientY - rect!.top) / 32)
    };
}

export { getMousePos }