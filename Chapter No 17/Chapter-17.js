// Array III

// Exercise no 1

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

sizes.shift();
console.log(sizes);

// Exercise no 2

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

sizes.unshift(1, 2, 3);

console.log(sizes);

// Exercise no 3

var arr = ["First"];

arr.unshift("Second");

alert(arr[0]);

// Exercise no 4

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

sizes.splice(2, 0, "L");

console.log(sizes);

// Exercise no 5

var sizes = ["S", "M", "XL", "XXL", "XXXL"];

var regSizes = sizes.slice(0, 3);

console.log(regSizes);

// Exercise no 6

var pets = ["dog", "cat", "ox", "duck", "frog"];

pets.splice(1, 3, "elephant", "giraffe");

console.log(pets);

// Exercise no 7

var pets = ["dog", "cat", "ox", "duck", "frog"];

pets.splice(1, 2);

console.log(pets);

// Exercise no 8

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

var reducedPets = pets.slice(3, 5);

console.log(reducedPets);
