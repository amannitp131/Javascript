const aman ={ //define an object
    height:5,
    weight:60,
    house:"begusarai",
    sumof : function(){
        return this.weight+this.height;
    }
};
console.log(aman.height);
console.log(aman["weight"]);//access property of object
console.log(aman.sumof());//access methods of object
console.log(aman.sumof);
//different methods to create an object
//method 2
const shivam = {};
shivam.height=5;
shivam.weight=50;
shivam.house="gaya";
console.log(shivam["weight"]);

//method 2
const ritesh =  new Object();
ritesh.height=5;
ritesh.weight=50;
ritesh.house="gopalganj";

delete ritesh.height;

for(let x in ritesh){
    console.log(ritesh[x]);
}

//nested objects
const student1 = {
    name:"akash",
    roll:2306067,
    submarks : {
        math:98,
        chem :97,
        hindi :94
    }
}
console.log(student1.submarks.math);
console.log(student1.submarks["chem"]);
console.log(student1["submarks"]["hindi"]);  

//nested array and object
const student2={
    name:"sakshi",
    roll:2303093,
    submarks: [
        {sub1:"math",marks:[98,99,100],grade:"A"},
        {sub2:"eng",marks:[98,99,99],grade:"A"},
        {sub2:"physics",marks:[99,99,99],grade:"A"}
    ]

}
for(let i in student2){
    console.log(student2.name);
    console.log(student2.submarks[i]);
}