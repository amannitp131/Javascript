//1st method
function add(a,b){
    return a+b;
}
console.log(add(2,8));

//2nd method
 const multiply= function(a,b){
    return a*b;
 };
 console.log(multiply(3,8)); 

 //3 rd method  function constructor 
const subtract = new Function("a","b","return a-b");
console.log(subtract(20,7));
