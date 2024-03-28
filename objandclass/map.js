const map1 = new Map([
    [2,"aman"],[1,"shivam"],[3,"akash"]
]);
const map2 = new Map();
map2.set(1,"a");
map2.set(2,"b");
map2.set(3,"c");
console.log(map1);
console.log(map2);



map1.forEach (function(value, key) {
  console.log(key + ' = ' + value);
})
