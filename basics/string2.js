let str="aman";
console.log(str);
//methods in string
//method will create new string with new value and 
// does not make any change in previous string
//this is because string are immutable in javascript
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let str1="        ama  ns    "
console.log(str1.trim());
console.log(str.slice(1,3));

console.log(str.concat(str1));
let str2= "i am" +str+str1;
console.log(str2);
let str4="hellololo";
console.log(str4.replace("lo","p"));
console.log(str4.replaceAll("lo","p"));
for(let i=0;i<5;i++){
    console.log(str4.charAt(i));
}