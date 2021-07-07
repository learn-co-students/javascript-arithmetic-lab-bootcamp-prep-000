function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

console.log(add(3, 5))

function inc(n) {
  return n + 1
}

console.log(inc(5))

function dec(n) {
  return n - 1
}

console.log(dec(5))

function makeInt(num) {
  return parseInt(num, 10)
}

console.log(makeInt("9000"))

function preserveDecimal(num) {
  return parseFloat(num)
}

console.log(preserveDecimal(2.222))
