// if...else and else if statements

// Exercise no 1

var a = 5;
var b = 10;

if (a >= b) {
  alert("A is greater then B");
} else {
  alert("B is greater then A");
}

// Exercise no 2

var english = +prompt("Enter Your English Marks");
var urdu = +prompt("Enter Your Urdu Marks");
var maths = +prompt("Enter Your Maths Marks");

var markObatined = english + urdu + maths;
var totalMarks = 300;

var percentage = (markObatined / totalMarks) * 100;

if (percentage >= 90) {
  console.log("You have Scored " + percentage + "%");
  console.log("You Got A+");
} else if (percentage >= 80) {
  console.log("You have Scored " + percentage + "%");
  console.log("You Got A");
} else if (percentage >= 70) {
  console.log("You have Scored " + percentage + "%");
  console.log("You Got B");
} else if (percentage >= 60) {
  console.log("You have Scored " + percentage + "%");
  console.log("You Got C");
} else if (percentage >= 50) {
  console.log("You have Scored " + percentage + "%");
  console.log("You Got D");
} else if (percentage < 50) {
  console.log("You have Scored " + percentage + "%");
  console.log("You Failed");
}

// Exercise no 3

var c = 15;

if (c === 10) {
  alert("c is 10");
} else {
  alert("c is 15");
}

// Exercise no 4

var city = prompt("Enter City Name");

if (city == "Karachi") {
  alert("acknowledging it is Karachi.");
} else if (city == "Lahore") {
  alert("acknowledging it is Lahore.");
} else {
  alert("acknowledging it is " + city);
}
