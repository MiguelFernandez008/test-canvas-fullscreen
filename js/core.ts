import { GameEntity } from "./modelos/entity";

export class Game implements GameEntity {
 
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _pixels: ImageData;

    constructor(nodeID: string) {
        this._canvas = <HTMLCanvasElement>document.getElementById(nodeID);
        this._context = this._canvas.getContext("2d");
        this._init();
    }    

    private _init(): void {
        this._resizeCanvas();
        this._colorCanvas();
    }

    private _resizeCanvas(): void {
        this._canvas.width = document.body.clientWidth;
        this._canvas.height = document.body.clientHeight;
    }

    private _colorCanvas(): void {
        this._pixels = this._context.getImageData(0, 0, this._canvas.width, this._canvas.height);
        const pixel_length: number = this._pixels.data.length;
        const w_pixel_width : number = document.body.clientWidth * 4;
        let linea = 1;
        for (var i = 0; i < pixel_length; i+=4) {  
            let red: number = 0; 
            let green: number = 0; 
            let blue: number = 0; 
            let alpha: number = 150;
            if(i >= 0 && i < pixel_length / 3) {
                red = 255;  // red
                green = 0;  // green
                blue = 0;   // blue                
            }
            else if(i >= pixel_length / 3 && i < (pixel_length / 3) * 2) {
                red = 0;    // red
                green = 255;// green
                blue = 0;   // blue
            }
            else {
                red = 0;    // red
                green = 0;  // green
                blue = 255; // blue
            }
            this._pixels.data[i]     = red;     // red
            this._pixels.data[i + 1] = green;       // green
            this._pixels.data[i + 2] = blue;       // blue
            this._pixels.data[i + 3] = alpha;     // apha
            if(i == w_pixel_width * linea) {
                linea++;                
            }
        }
        this._context.putImageData(this._pixels, 0, 0);
    }

    render(): void {
        throw new Error("Method not implemented.");
    }

    update(delta: number): void {
        throw new Error("Method not implemented.");
    }

    resize(): void {
        this._resizeCanvas();
        this._colorCanvas();
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }
}