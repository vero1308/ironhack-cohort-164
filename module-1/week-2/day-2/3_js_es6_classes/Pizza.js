class Pizza {
  constructor(infos) {
    const possibleCrusts = ["classic", "chunky", "pan", "cheesy crust"];

    if (!possibleCrusts.includes(infos.crust)) {
      throw new Error("wrong crust type mate !!!");
    }

    if (!Array.isArray(infos.topings)) {
      throw new Error("topings should be an Array mate !!!");
    }

    this.name = infos.name;
    this.crust = infos.crust;
    this.price = infos.price;
    this.topings = infos.topings;
    this.stars = 0;
  }

  setStars(n) {
      this.stars += n;
  }
}

const fourSeason = new Pizza({
  name: "Four Season",
  price: 14,
  crust: "classic",
  topings: ["mushrooms", "olives", "artichoke"]
});

fourSeason.setStars(-1);
console.log(fourSeason);

fourSeason.setStars(5);
console.log(fourSeason);

// crust
// topings
// sauce
// size
// price
// name
// spice
// details
