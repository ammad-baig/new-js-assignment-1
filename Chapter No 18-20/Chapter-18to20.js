// For Loops

// Exercise no 1

for (var i = 0; i < 10; i++) {
  console.log("10 Times");
}

// Exercise no 2

for (var i = 0; i <= 12; i++) {
  console.log("Run 13 Times bcz of = ");
}

// Exercise no 3

// for var i = 0 i <= 4 i++

for (var i = 0; i <= 4; i++) {}

// Exercise no 4

for (var j = 0; j < 100; j++) {
  console.log("100 Times run");
}

// Exercise no 5

for (var i = 3; i > 0; i--) {
  console.log("Reverse Loop with Decrements");
}

// Exercise no 6

var array = [1, 2, 3, 4, 5];
var count = array.length;

console.log(count);

// Exercise no 7

var flag = true;

// Exercise no 8

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

for (var i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// Exercise no 9

for (var i = 0; i < 10; i++) {
  if (i === 1) {
    console.log("Counting " + i);
    break;
  }
}

// Exercise no 10

var userName = ["ali", "ahmed", "zain", "ammad", "arif", "sufyan"];
var firstName = prompt("Enter First Name");
var flag = false;
for (var i = 0; i < userName.length; i++) {
  if (firstName === userName[i]) {
    alert("Enter");
    flag = true;
    break;
  }
}

// Exercise no 11

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var userInput = +prompt("Enter list Number");
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

// Exercise no 12

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  for (var j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}

