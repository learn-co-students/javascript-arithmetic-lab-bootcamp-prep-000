var a = 1
var b = 80

function add(a, b) {
  return a + b;
}

add();

var c = 60
var d = 40

function subtract(c, d) {
  return c - d;
}

subtract();

var e = 2
var f = 3.4

function multiply(e, f) {
  return e * f;
}

multiply();

var g = 5.0
var h = 2.5

function divide(g, h) {
  return g / h;
}

divide();

var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number)

add5()

console.log(number)

number = 10

add5()

console.log(number)

divideBy3()

console.log(number)

function inc(a) {
  return a + 1;
}

inc();

function dec(b) {
  return b - 1;
}

dec();

function makeInt(a) {
  return parseInt(a, 10);
}

makeInt();

var x = 80.123999

function preserveDecimal(x) {
  return parseFloat(x);
}

preserveDecimal();
