function add (num1, num2) {
  return num1 + num2
}

function subtract (num1, num2) {
  return num1 - num2
}

function multiply (num1, num2) {
  return num1 * num2
}

function divide (num1, num2) {
  return num1 / num2
}

function inc (num) {
  return num +1
}

function dec (num) {
  return num - 1
}

function makeInt (num) {
  num = parseInt(num, 10);
  return num
  }

function preserveDecimal (num) {
  num = parseFloat(num);
  return num
}