import Chronometer from "./Chronometer.js";
import World from "./World.js";
import Player from "./Player.js";
import {ctx, updateChronoElement} from "./_dom.js";
import utils from "./_utils.js";

export default class Game {
  constructor() {
    this.chronometer = new Chronometer();
    this.world = new World();
    this.players = [];
    this.roundTimeLimit = 60;
    console.log(this);
  }

  start() {
    const playerOne = new Player(
      ctx,
      (innerWidth - 30) / 2,
      (innerHeight - 30) / 2,
      10,
      "black",
      true,
      "foo",
      0
    );
    this.world.init(playerOne);

    this.chronometer.startClick(() => {
        if (this.chronometer.getSeconds() === this.roundTimeLimit) this.chronometer.resetClick();
        updateChronoElement(this.chronometer.getSeconds(), this.roundTimeLimit);
    })
  }

  addPlayer() {
    this.players.push("foo");
  }
}

const game = new Game();
game.start();
