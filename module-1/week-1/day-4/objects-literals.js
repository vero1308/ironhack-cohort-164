var student = {
  name: "Bill",
  lastname: "Ravensmith",
  age: 32,
  lovesJS: true,
  hobbies: ["cooking", "dancing", "sleeping"],
  friend: ["Jill", "Will", "Jim"],
  favoriteColor: null,
  address: {
    city: "Paris",
    zipcode: 75018,
    street: "Rue Fake",
    streetNumber: 13
  }
};

// display the full student object !
// console.log(student);
// access specific key/value pairs
console.log("----------");
console.log(student.name);
console.log("----------");
console.log(student.age);
console.log("----------");
console.log(student.address.city);
console.log("----------");
for (let i = 0; i < student.hobbies.length; i++) {
  console.log(student.hobbies[i]);
}
console.log("----------");
console.log(student.hobbies[2]);

// loop through students properties

for (let prop in student) {
  if (student.hasOwnProperty(prop)) {
    console.log("the prop " + prop + " is equal to => \n"); // print only the property as a label
    console.log(student[prop] + "\n"); // this will access the value associated to the current property
  }
}

// use template strings
console.log(`the student full name is ${student.name} ${student.lastname}`);
console.log("the student full name is " + student.name + " " + student.lastname);



// use indirect the indexing feature ....

function getStudentInfo(student, key) {
  return student[key];
}
console.log("----  getStudentInfo result  ------");
var lastname = getStudentInfo(student, "lastname");
console.log(lastname);

var city = getStudentInfo(getStudentInfo(student, "address"), "city");
console.log(city);
