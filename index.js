var number

function add(a, b) {
  return a + b
}

add(3, 5)

function subtract(a, b) {
  return a - b
}

subtract(5, 3)

function multiply(a, b) {
  return a * b
}

multiply(3, 5)

function divide(a, b) {
  return a / b
}

divide(15, 3)

function inc(a) {
  return a += 1
}

inc(3)

function dec(a) {
  return a -= 1
}

dec(3)

function makeInt(a) {
  return parseInt(a, 10)
}

makeInt(3)

makeInt(0x2328)

function preserveDecimal(a) {
  return parseFloat(a)
}

preserveDecimal(3.25)
