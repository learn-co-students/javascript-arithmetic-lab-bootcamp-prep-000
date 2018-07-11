
function add(a,b) {
  var sum  = a + b
  return sum
}

function subtract(a,b) {
 var difference = a - b
  return difference
}

function multiply(a,b) {
  var product = a * b
  return product
}

function divide(a,b) {
  var quotient = a / b
  return quotient
}

function inc(n) {
  var number = n
  number++
  return number
  
}

function dec(n) {
  var number = n
  number--
  return number
}

function makeInt(n) {
 var parsed = parseInt(n,10)
 return parsed
}

function preserveDecimal(n) {
  var parsed = parseFloat(n)
  return parsed
}