var students = ["Sarah", "Andy", "Venkat", "Noémie", "Marion", "Véro"];

var friends = ["Max", "Jill", "Silvia", "Nuts", "Karim"];

function sayHelloToMany(people) {
  for (let i = 0; i < people.length; i++) {
    console.log("hello " + people[i]);
  }
  console.log("------------------------");
}

sayHelloToMany(students);
sayHelloToMany(friends);
sayHelloToMany(["dog", "cat", "bird", "fish"]);
// sayHelloToMany(["dog", "cat", "bird", "fish"].concat(students).concat(friends));
