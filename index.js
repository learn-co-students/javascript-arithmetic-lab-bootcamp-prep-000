
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

function inc(n) {
  n++
  return n 
}

function dec(n) {
  n--
  return n
}

function makeInt(n) {
  n = parseInt(n, 10)
  return n
}

function preserveDecimal(n) {
  n = parseFloat(n)
  return n
}

number = parseInt('0x2328', 10)
console.log(number)

number = parseInt('2.22', 10)
console.log(number)

number = parseFloat('80.123')
console.log(number)

