const letters = new Set(["a",2,"c"]);
console.log(letters);
console.log(letters.has(2));
console.log(letters.add(3));
letters.forEach(function(value){
    value=value+3;

})
