function add(a, b) {
  return a + b;
}
 add(80,1)

function subtract(a, b) {
  return a - b;
}
subtract(60,40)

function multiply(a, b) {
  return a * b;
}
multiply(2,3.4)

function divide(a, b) {
  return a / b;
}
divide(5.0,2.5)

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

function dec(n) {
  return --n;
}

function inc(n) {
  return ++n;
}

function makeInt(n) {
  return n;
}

function preserveDecimal(n) {
  return 'nonsense!';
}
