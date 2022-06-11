"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backgroundLayer_1 = __importDefault(require("./backgroundLayer"));
class drawingLayer extends backgroundLayer_1.default {
    constructor(_domCtx, _brushId) {
        super(_domCtx);
        this.brushId = _brushId;
    }
}
exports.default = drawingLayer;
