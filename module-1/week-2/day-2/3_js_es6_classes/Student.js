class Cohort {
  constructor(number, start, end) {
    this.number = number;
    this.startDate = start;
    this.endDate = end;
    this.students = [];
  }

  addStudent(s) {
    this.students.push(s);
  }
}

class Student {
  constructor(name, age, cohort) {
    this.name = name;
    this.age = age;
  }

  presentYourself() {
    return `Hey, I'm ${this.name}, and i've joined the cohort ${this.cohort.number}`;
  }
}

// a cohort
const cohort164 = new Cohort(164, "10/14/19", "12/20/19");
console.log(cohort164);
cohort164.addStudent(new Student("Amine", 23));
console.log(cohort164);

// a single student....
const studentX = new Student("Noémie", null);
console.log(studentX.presentYourself());
