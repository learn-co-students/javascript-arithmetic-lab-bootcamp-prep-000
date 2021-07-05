var a, b 

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
  a++
  return a
} 

function dec(a) {
  a--
  return a
}

function makeInt(n) {
  var x = parseInt(n, 10)
    return x
  if (x === "Nan")
    return "NaN"
}

function preserveDecimal(n) {
  var x = parseFloat(n)
    return x
  if (x.toString() === x)
    return "NaN"
}






