function add(a , b) {
  return (a + b)
}

function subtract(a, b) {
  return (a - b)
}

function multiply(a, b) {
  return (a * b)
}

function divide(a, b) {
  return (a / b)
}

function inc(n) {
  var number
  number = n
  number++
  return (number)
}

function dec(n) {
  var number
  number = n
  number--
  return (number)
}

function makeInt(n) {
  var number
  number = n
  return (parseInt(number, 10))
}

function preserveDecimal(n) {
  var number
  number = n
  return (parseFloat(number))
}
