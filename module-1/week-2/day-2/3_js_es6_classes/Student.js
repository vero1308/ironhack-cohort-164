class Cohort {
  constructor(number, start, end) {
    this.number = number;
    this.startDate = start;
    this.endDate = end;
  }
}

class Student {
  constructor(name, age, cohort) {
    this.name = name;
    this.age = age;
    this.cohort = cohort;
  }

  presentYourself() {
    return `Hey, I'm ${this.name}, and i've joined the cohort ${this.cohort.number}`;
  }
}

const cohort164 = new Cohort(164, "10/14/19", "12/20/19");
console.log(cohort164);
const student1 = new Student("Amine", 23, cohort164);
console.log(student1);
const res = student1.presentYourself();
console.log(res);
