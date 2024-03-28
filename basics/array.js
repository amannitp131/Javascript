let arr=[2,4,2,21,3,3];
let arr1=["jssjs","moemme","jsxwo","woswm"]
let arr2=[2,"inwxw",3,45,"xmoomx"]
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr2.length);
arr[3]=908; //string immutable but array mutable
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for (let element of arr){
    console.log(element);
}
for (let element1 of arr1){
    console.log(element1.toUpperCase());
}
console.log(`2nd element of array is ${arr2[3]}`);