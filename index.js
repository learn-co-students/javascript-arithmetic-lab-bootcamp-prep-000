var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number) // 3.333333333335

add5()

console.log(number) // 8.333333333335

// reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(a) {
  return ++a
}

function dec(a) {
  return --a
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}
