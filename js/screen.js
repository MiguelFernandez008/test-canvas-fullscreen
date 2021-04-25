export class ScreenManager {
    constructor(game) {
        this._game = game;
    }
    on_resize() {
        window.addEventListener('resize', this._game.resize.bind(this._game));
    }
    go_fullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
}
//# sourceMappingURL=screen.js.map