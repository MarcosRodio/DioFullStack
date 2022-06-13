let array = ["string", 1, true];
console.log(array);

let arrays = [ [], [1],[2],[3],[4]];
console.log(arrays);

arrays.forEach(function (item, index){console.log(index, item)});

array.push("novoItem");

console.log(array);

array.pop();

console.log(array);

array.shift(array);

array.unshift("novoNoInicio");

console.log(array.indexOf(1));

console.log(array);

arrays.splice(0,2);

console.log(arrays);

let novoArray = arrays.slice(0,1);

console.log(novoArray);

