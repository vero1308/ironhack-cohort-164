class Product {

  constructor(name, price, ref) {
    this.name = name;
    this.price = price;
    this.reference = ref || "no ref yet";
  }

  // methods are just function tied to a specific class of objects
  getFullProductInfo() {
    return `${this.getName()} costs ${this.getPrice()}`;
  }

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name
  }

  setName(name) {
    this.name = name;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }
}


class Sneaker extends Product {
  constructor(name, price, ref, size, color) {
    super(name, price, ref);
    this.size = size;
    this.color = color;
  }
}


const airJordan4 = new Sneaker("jordan4", 300, "refGDGDGD", 44, "black and red");

console.log(airJordan4)
console.log(airJordan4.getFullProductInfo())


// const p1 = new Product("burger", 2, "AGSDNburger12030320");
// console.log(p1); // p1 is an 'instance of' the class Product
// const p2 = new Product("burger", 20);
// console.log(p2); // p1 is an 'instance of' the class Product
// const p3 = new Product("pizza", 12);
// console.log(p3); // p1 is an 'instance of' the class Product

// console.log(p1.getFullProductInfo());
// console.log(p3.getFullProductInfo());
// p3.setPrice(100);
// p3.setName("veggie pizza");
// console.log(p3.getFullProductInfo());