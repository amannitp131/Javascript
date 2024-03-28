let arr = [2,4,3,2,22,3,55];
arr.forEach(function myfunc(val){
    console.log(val); } )
    //val is value at each index
    arr.forEach((val) => {
        console.log(val); } )

let arr1 = ['csacx','xwxw','xcqwcc','sccce'];
arr1.forEach(function myfunc(val){
    console.log(val.toUpperCase()); } )

    // map method 
    arr.map((val) => {
        console.log(val); } )
    
    let newarr = arr.map((val) => {
        return val*val; } )
    console.log(newarr);
// filter method
let newarr1 = arr.filter((val) => {
    return val%2==0; } )
console.log(newarr1);

// reduced method 
let array=[1,2,3,411,50];
const output = array.reduce((res,cur) => {return res+cur;
});
    console.log(output);
    const max = array.reduce((res,cur) => {return res>cur?res:cur;
    });
        console.log(max);