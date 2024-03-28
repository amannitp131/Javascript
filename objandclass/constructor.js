//object constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

   console.log(myFather.age);
   console.log(myMother.eyeColor);
   Person.prototype.nationality = "English";
   console.log(myFather.nationality);
   console.log(myMother.nationality);
