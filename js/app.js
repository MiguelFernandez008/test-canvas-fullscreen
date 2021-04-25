import { Game } from "./core.js";
import { ScreenManager } from "./screen.js";
const toggle_fullscreen = document.getElementById("FullScreen");
const game = new Game("Game");
const screen = new ScreenManager(game);
screen.on_resize();
toggle_fullscreen.addEventListener('click', () => {
    screen.go_fullscreen();
}, false);
//# sourceMappingURL=app.js.map