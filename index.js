function add(a, b) {
  var num1 = a
  var num2 = b
  return num1 + num2
}

function subtract(a, b) {
  var num1 = a
  var num2 = b
  return num1 - num2
}

function multiply(a, b) {
  var num1 = a
  var num2 = b
  return num1 * num2
}

function divide(a, b) {
  var num1 = a
  var num2 = b
  return num1 / num2
}

function inc(a) {
  var num1 = a
  num1 += 1
  return num1
}

function dec(a) {
  var num1 = a
  num1 -= 1
  return num1
}

function makeInt(n) {
  var num1 = n
  return parseInt(num1, 10)
}

function preserveDecimal(string) {
  var word = string
  return parseFloat(word)
}
