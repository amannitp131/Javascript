let arr=[2,4,2,21,3,3];
// to add element
arr.push(88,89,2929);
arr.unshift(34,44,33,344)
console.log(arr);
//to remove element
let d = arr.shift();
let c=arr.pop();
console.log(c,d);
console.log(arr);

console.log(arr.toString());

let arr1=["jssjs","moemme","jsxwo","woswm"]
let arr2= arr1.concat(arr);
console.log(arr2);

console.log(arr.slicelice(2,5)); //original array remain unchanged
 let arr3=[1,2,3,4,5,6,7,8,9,10];
arr3.splice(2,2);
 console.log(arr3);