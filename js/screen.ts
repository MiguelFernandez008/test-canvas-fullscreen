import { Game } from "./core.js";

export class ScreenManager {

    private _game: Game

    constructor(game: Game) {
        this._game = game;
    }

    on_resize(): void {
        window.addEventListener('resize', this._game.resize.bind(this._game));
    }

    go_fullscreen(): void {
        if(!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
}