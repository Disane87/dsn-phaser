import * as Phaser from "phaser";

import { NoiseGenerator } from "../common/noise";
import { Tile } from "../common/tiles";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game"
};

export class GameScene extends Phaser.Scene {
  private tiles: Phaser.GameObjects.Group;
  constructor() {
    super(sceneConfig);
  }

  public create() {
    

    this.tiles = this.add.group();

    const noiseMap = NoiseGenerator.generateNoiseMap(100, 100, 0, 1, 5, 2, 2, new Phaser.Math.Vector2(5,5));
    noiseMap.forEach((x, xIndex) => {
      x.forEach((y, yIndex) => {
         var key = "";
          var animationKey = "";

          if (y < 0.2) {
            key = "sprWater";
          }
          else if (y >= 0.2 && y < 0.3) {
            key = "sprSand";
          }
          else if (y >= 0.5) {
            key = "sprGrass";
          }

          this.tiles.add(new Tile(this, xIndex, yIndex, key))
      })
    })

    this.cameras.main.setZoom(1);
  }

  preload() {
    this.load.spritesheet("sprWater", "https://i.ibb.co/T8y4qRZ/sprWater.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image("sprSand", "https://i.ibb.co/hZ8k3RW/sprSand.png");
    this.load.image("sprGrass", "https://i.ibb.co/Dw5qK09/sprGrass.png");
  }

  update() {

  }
}
