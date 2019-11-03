import { updateLifeElement, updateScoreElement } from "./_dom.js";
import Circle from "./Circle.js";
import Weapon from "./Weapon.js";

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

export default class Player extends Circle {

  constructor(ctx, x, y, radius, color, isFull, name) {
    super(ctx, x, y, radius, color, isFull);
    this.name = name;
    this.level = 1;
    this.score = 0;
    this.canons = [];
    this.isPlayer = true;
    this.rotation = {
      deg: 0,
      isActive: false,
      dir: null
    };
    this.listenMouseMove();
    this.listenKeyDown();
    this.addCanon();

    console.log(this);
  }


  addCanon() {
    if (this.canons.length < 4)
      this.canons.push(new Weapon(this.ctx, this, "bullet"));
  }

  getName = () => this.name;

  getLife = () => (this.life = v);

  setName = n => (this.name = n);

  setLife = v => {
    this.life += v;
    if (this.life <= 0) this.life = 100;
    updateLifeElement(this.life);
  };

  setScore = p => {
    this.score += p;
    console.log("@setScore inc by => ", p, "current score => ", this.score);
    updateScoreElement(this.score);
  };

  listenKeyDown() {
    addEventListener("keypress", e => {
      // console.log(e.code)
      var dir;
      if (e.code === "KeyQ") dir =  "l";
      if (e.code === "KeyE") dir =  "r";
      this.rotation.isActive = true;
      this.rotation.dir = dir;
    });
    addEventListener("keyup", e => {
      console.log(e.code)
      if (e.code === "KeyQ" || e.code === "KeyE" )  {
        this.rotation.isActive = false;
        this.rotation.dir = null;
      }
    });
  }

  listenMouseMove() {
    addEventListener("mousemove", event => {
      // console.log(this);
      if (!this.isCollide) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      } else event.preventDefault();
    });
  }

  update(circles) {
    this.handleBorderCollision();
    this.handleCollision(circles);
    if (this.isCollide) this.color = "red";
    else {
      setTimeout(() => {
        this.color = this.originalColor;
      }, 2000);
    }
    this.x = mouse.x;
    this.y = mouse.y;
    this.draw();
  }
}
