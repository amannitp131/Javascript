//access the h2
let h2 =document.querySelector("h2");
// console.dir(h2.innerText);
// change the h2
h2.innerText = h2.innerText +" by aman";

let division = document.querySelectorAll(".box");
console.log(division);
let idx =1;
for(d of division){
    d.innerText=`new unique value ${idx}`;
    idx++;
}
// division[0].innerText ="new unique value 1";
// division[1].innerText ="new unique value 2";
// division[2].innerText ="new unique value 3";
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("id","mishra");
 let a = document.querySelector("p");

 a.style.backgroundColor = "purple";

 // ti insert element
 let newbtn = document.createElement("button");
 newbtn.innerText = "click me !";
 console.log(newbtn);
 let div = document.querySelector("div");
 div.after(newbtn);
 //a.remove();