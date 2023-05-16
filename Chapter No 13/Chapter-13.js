// Testing sets of conditions

// Exercise no 1

var a = 10;
var b = 10;
var c = 10;
var d = 10;

if (a == b && c == d) {
  console.log("a has the same value as b and c has the same value as d");
}

// Exercise no 2

var a1 = 10;
var b1 = 10;
var c1 = 10;
var d1 = 20;

if (a1 == b1 || c1 == d1) {
  console.log(
    "a has the same value as b and c doesn't have the same value as d"
  );
}

// Exercise no 3

var yourName = "Arsalan";
var age = 25;

if ((yourName == "Hamza", "Arsalan" || age < 60)) {
  console.log("name is " + yourName + " and age is " + age);
}

// Exercise no 4

var num1 = 50;
var num2 = 30;

if (num1 < num2 || num1 > num2) {
  alert("num1 is greater then num2");
}

// Exercise no 5

var firstName = "Ammad";
var lastName = "Baig";

var fName = prompt("Enter First Name");
var lName = prompt("Enter Last Name");

if (fName == firstName && lName == lastName) {
  alert("Correct");
} else {
  alert("Incorrect");
}
