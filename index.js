function add(a,b) {
  return (a+b)
}

function subtract(a,b) {
  return (a-b)
}

function multiply(a,b) {
  return (a*b)
}

function divide(a,b) {
  return (a/b)
}

function inc(a) {
  var number = a
  number++
  return (number)
}

function dec(a) {
  var decNumber = a
  decNumber--
  return (decNumber)
}

function makeInt(a) {
  var newInt=parseInt(a,10)
  return newInt
}

function preserveDecimal(a) {
    var newFloat=parseFloat(a)
    return newFloat
}