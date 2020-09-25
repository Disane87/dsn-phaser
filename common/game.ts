import { GameScene } from "../scenes/main";

const CONFIG = {
  title: "Sample",
  mode: Phaser.Scale.CENTER_BOTH,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight
  },

  scene: GameScene,

  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },
  pixelArt: true,
  roundPixels: true,
  parent: "game"
};

export class MainGame extends Phaser.Game {
  constructor() {
    super(CONFIG);
  }
}
