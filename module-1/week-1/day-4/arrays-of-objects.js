var students = [
  { name: "Miguel", cohort: 125 },
  { name: "Aïda", cohort: 152 },
  { name: "Sophie-Anne", cohort: 152 },
  { name: "Than", cohort: 125 },
  { name: "Yacine", cohort: 137 },
  { name: "Duc", cohort: 125 }
];

/*************************
        D.I.Y
*************************/
/*
    Use the for OR forEach loop to iterate through the students array.
    Use template strings (``) to display in a nice way, name +/ cohort for each student.
*/

students.forEach(function(student) {
  console.log(`${student.name} is part of cohort ${student.cohort}`);
});

// event shorter syntax :
// We can get rid of the () of the fat-arrow function since there is only one parameter
students.forEach(student =>
  console.log(`${student.name} is part of cohort ${student.cohort}`)
);

// more complex data structures ... :)
// A) cohorts as a matrix :

var cohorts = [
  [
    { name: "Miguel", cohort: 125 },
    { name: "Alex", cohort: 125 },
    { name: "Mimi", cohort: 125 },
    { name: "Than", cohort: 125 },
    { name: "Franck", cohort: 125 },
    { name: "Duc", cohort: 125 }
  ],
  [
    { name: "Octave", cohort: 137 },
    { name: "Virginie", cohort: 137 },
    { name: "Souhair", cohort: 137 },
    { name: "Clara", cohort: 137 },
    { name: "Yacine", cohort: 137 },
    { name: "Elyn", cohort: 137 }
  ],
  [
    { name: "Dorothea", cohort: 152 },
    { name: "Aïda", cohort: 152 },
    { name: "Xavier", cohort: 152 },
    { name: "Henri", cohort: 152 },
    { name: "Anaïs", cohort: 152 },
    { name: "Antonin", cohort: 152 }
  ]
];

console.log("-------- COHORTS MATRIX ---------");

cohorts.forEach(cohort => {
  cohort.forEach(student => {
    console.log(`${student.name} is part of cohort ${student.cohort}`);
  });
});

console.log("-------- /end of COHORTS MATRIX ---------");

var cohortsv2 = {
  cohort_125: {
    students: [
      { name: "Miguel" },
      { name: "Alex" },
      { name: "Mimi" },
      { name: "Than" },
      { name: "Franck" },
      { name: "Duc" }
    ],
    startingDate: "march 2019"
  },
  cohort_137: {
    students: [
      { name: "Octave" },
      { name: "Virginie" },
      { name: "Souhair" },
      { name: "Clara" },
      { name: "Yacine" },
      { name: "Elyn" }
    ],
    startingDate: "june 2019"
  },
  cohort_152: {
    students: [
      { name: "Octave" },
      { name: "Virginie" },
      { name: "Souhair" },
      { name: "Clara" },
      { name: "Yacine" },
      { name: "Elyn" }
    ],
    startingDate: "august 2019"
  }
};

cohortsv2.cohort_125.students.forEach(s => console.log(student.name));

// length - 1
const studentsTemp = cohortsv2.cohort_152.students;
console.log(studentsTemp[studentsTemp.length - 1]);
