import Chronometer from "./Chronometer.js";
import World from "./World.js";
import Player from "./Player.js";
import { ctx, updateChronoElement } from "./_dom.js";
import "./_events.js";

export default class Game {
  constructor() {
    this.chronometer = new Chronometer();
    this.world = new World();
    this.players = [];
    this.roundTimeLimit = 60;
    // console.log(this);
  }

  start() {
    this.addPlayer(
      new Player(
        ctx,
        (innerWidth - 30) / 2,
        (innerHeight - 30) / 2,
        10,
        "black",
        true,
        "foo",
        0
      )
    );

    this.world.init(this.players);

    let blocked = false;
    this.chronometer.startClick(() => {
      let secs = this.chronometer.getSeconds();

      if (secs === this.roundTimeLimit - 1 && !blocked) {
          blocked = true;
          setTimeout(() => blocked = false, 1000)
        this.updatePlayersScore();
      }

      updateChronoElement(secs, this.roundTimeLimit);

      //   console.log(secs);
    });
  }

  updatePlayersScore() {
    console.log("players length => ", this.players.length);
    this.players.forEach(p => {
      //   console.log(p);
      p.setScore(1);
    });
  }

  addPlayer(p) {
    this.players.push(p);
  }
}

const game = new Game();
game.start();
