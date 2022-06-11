"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class backgroundLayer {
    constructor(_domCtx) {
        this.tileSize = 32;
        const [_ctx, _canvas] = this.createLayer();
        this.canvas = _canvas;
        this.ctx = _ctx;
        this.domCtx = _domCtx;
        this.canvas.width = 960;
        this.canvas.height = 960;
    }
    createLayer() {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        return [ctx, canvas];
    }
}
exports.default = backgroundLayer;
