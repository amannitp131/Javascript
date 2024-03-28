let name ="aman12";
console.log(name.length);
let value ="aman13"
console.log(value);
console.log(value[2]);
nametoUpperCase();
console.log(name);


//inbuilt function
console.log(name.length);
console.log(name[0],name[1]);

//tempelate literals
let sentence =`aman is friend of ayush`;
console.log(sentence);
console.log(typeof sentence);

let obj={
    item:"pen",
    price:"10"
}
console.log("the price of ",obj.item,"is",obj.price);
let output = `the price od ${obj.item} is ${obj.price}`; //string interpolation -- it is a method 
console.log(output);