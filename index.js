1 + 80;
60 - 40;
2 * 3.4;
5.0 / 2.5;

function add(a,b) { 
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

var n = 5;

function inc(n) {
  return n+1;
}

function dec(n) {
  return n-1;
}

number;
number--;
number--;
--number;
++number;

number += 3;
number -= 2;
number *= 10;
number /= 5;

var number = 10;
function add5() {
  return number += 5;
}

function divideBy3() {
  return number /= 3;
}

divideBy3();

console.log(number);

add5();

console.log(number);

divideBy3();

console.log(number);

parseInt('2', 10);
parseInt('2.2222', 10);
parseInt('nonsense!', 10);

parseFloat('80.123999');

function makeInt(n) {
 return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}