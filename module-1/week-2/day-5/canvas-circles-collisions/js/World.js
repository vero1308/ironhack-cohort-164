import utils from "./_utils.js";
import Circle from "./Circle.js";
import { canvas, ctx } from "./_dom.js";

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.requestPointerLock();

const colors = ["#DA2864", "#F08080", "#F3E9AB", "#8EE6BB", "#16A2A8"];
const circleLimit = 12;

export default class World {
  constructor() {
    this.circles = [];
    this.players = [];

    window.addEventListener(
      "bulletShot",
      e => {
        // console.log("yay ! bullet-shot event", e);
      },
      false
    );
  }

  addCircle() {
    let radius = utils.getRandomRadius(30, 50);
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    let y = utils.randomIntFromRange(radius, canvas.height - radius);
    let color = utils.getRandomColor(colors);

    for (let j = 0; j < this.circles.length; j++) {
      if (
        utils.getDistance(x, y, this.circles[j].x, this.circles[j].y) -
          radius * 2 <
        0
      ) {
        x = utils.randomIntFromRange(radius, canvas.width - radius);
        y = utils.randomIntFromRange(radius, canvas.height - radius);
        j = -1; // reset if overlap
      }
    }

    this.circles.push(new Circle(ctx, x, y, radius, color));
  }

  animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // this.circles.forEach(circle => {});

    for (let i = 0; i < this.circles.length; i += 1) {
      this.circles[i].update(this.circles);
    }

    this.players.forEach(player => {
      player.update(this.circles);
    });

    // if (this.weapons.length)
      // this.weapons.forEach(weapon => {
        // weapon.update(this.players[0]);
      // });

    requestAnimationFrame(() => {
      this.animate();
    });
  }

  init(players) {
    this.players = this.players.concat(players);

    this.circles = this.circles.concat(players);

    this.animate();

    window.setInterval(() => {
      if (this.circles.length < circleLimit) this.addCircle();
    }, 2000);
  }
}
