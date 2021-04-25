export class Game {
    constructor(nodeID) {
        this._canvas = document.getElementById(nodeID);
        this._context = this._canvas.getContext("2d");
        this._init();
    }
    _init() {
        this._resizeCanvas();
        this._colorCanvas();
    }
    _resizeCanvas() {
        this._canvas.width = document.body.clientWidth;
        this._canvas.height = document.body.clientHeight;
    }
    _colorCanvas() {
        this._pixels = this._context.getImageData(0, 0, this._canvas.width, this._canvas.height);
        const pixel_length = this._pixels.data.length;
        const w_pixel_width = document.body.clientWidth * 4;
        let linea = 1;
        for (var i = 0; i < pixel_length; i += 4) {
            let red = 0;
            let green = 0;
            let blue = 0;
            let alpha = 150;
            if (i >= 0 && i < pixel_length / 3) {
                red = 255;
                green = 0;
                blue = 0;
            }
            else if (i >= pixel_length / 3 && i < (pixel_length / 3) * 2) {
                red = 0;
                green = 255;
                blue = 0;
            }
            else {
                red = 0;
                green = 0;
                blue = 255;
            }
            this._pixels.data[i] = red;
            this._pixels.data[i + 1] = green;
            this._pixels.data[i + 2] = blue;
            this._pixels.data[i + 3] = alpha;
            if (i == w_pixel_width * linea) {
                linea++;
            }
        }
        this._context.putImageData(this._pixels, 0, 0);
    }
    render() {
        throw new Error("Method not implemented.");
    }
    update(delta) {
        throw new Error("Method not implemented.");
    }
    resize() {
        this._resizeCanvas();
        this._colorCanvas();
    }
    get canvas() {
        return this._canvas;
    }
    get context() {
        return this._context;
    }
}
//# sourceMappingURL=core.js.map