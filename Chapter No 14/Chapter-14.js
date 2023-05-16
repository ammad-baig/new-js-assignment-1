// if statements nested

// Exercise no 1

var password = prompt("Enter Your Password");

if (password != "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// Exercise no 2

var a = 1;
var c = "Max";
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// Exercise no 3

if (a === 1 && c === "Max") {
  alert("OK");
}

// Exercise no 4

var a = 10;
var b = 10;

if (a === b) {
  if (a <= b) {
    alert("The conditions is true");
  }
}
