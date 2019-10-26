import Circle from "./Circle.js";
import utils from "./_utils.js";

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

export default class Player extends Circle {
  constructor(ctx, x, y, radius, color, isFull, name) {
    super(ctx, x, y, radius, color, isFull);
    this.name = name;
    this.listenMouseMove();
  }

  getName = () => this.name;

  setName = n => this.name = n;

  listenMouseMove() {
    addEventListener("mousemove", event => {
        console.log(this.isCollide)
      if (!this.isCollide) {
 
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      } else event.preventDefault();
    });
  }

  update(circles) {
    if (this.isCollide) this.color = "red";
    else {
      setTimeout(() => {
        this.color = this.originalColor;
      }, 2000)

    }
    this.x = mouse.x;
    this.y = mouse.y;
    this.draw();
  }
}
