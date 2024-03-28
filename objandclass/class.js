// class student{
//   constructor(n,m){
//     this.name=n;
//     this.marks=m;

//   }
  
// }
// //creatin an object using class
// //constructor method is called automatically when a new object is created.
// //constructor is used to   initialize object properties
// //If you do not define a constructor method, 
// //JavaScript will add an empty constructor method.
// const student1 = new student(aman,97);
// const student2 = new student(shivam,97);
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() /*method*/{
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}
//object of class car created
const myCar = new Car("Ford", 2014);

// print in browser
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";