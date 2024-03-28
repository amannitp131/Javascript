const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };
 // Change a property
Object.defineProperty(person, "language", {value : "NO"});
Object.defineProperty(person, "language", {writable:false});
console.log(person);
console.log(person.language);
