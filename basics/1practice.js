// let a="wuiuwu";
// console.log(a+123); //output wuiuwu123

// const name={
//     "aman":34,
//     "shivam":23,
//     "akash":23
// }
// // name["bhaskar"]=34; not allowed to add new key after creating a object
//  name["shivam"]=33; 
// name["sqs"]=32;
// console.log(name);

 function count(a){
    let k=0;
    for (const val of a){
        if(val === 'a' ||val === 'e' ||val === 'i' ||val === 'o' ||val === 'u' ){
            k++;
        }
    }
    return k;
 }
 console.log(count("KJDNDIkjdbaoeij"));