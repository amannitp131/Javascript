
function sum(a,b){
    return (a+b)/2;
}
console.log(sum(6,76));
function avg(a,b){
    console.log(a/2+b/2);
}
avg(3,4);
//arrow function
const subtract = (a,b)=>{
    console.log(a-b);
}
subtract(78,67);
const mul = (a,b)=>{
    return (a*b);
}
console.log(mul(23,2));
const printhello = () =>{
    console.log("Hello");
}
 //callback function
 function abc(){
    console.log("hello");
 }
 function myfunc(abc){
         return abc;
 }