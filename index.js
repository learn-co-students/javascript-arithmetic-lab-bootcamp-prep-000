function add(a,b) {
  var c = a+b
  return c
}
function subtract(a,b) {
  var c = a-b
  return c
}
function multiply(a,b) {
  var c = a*b
  return c
}
function divide(a,b) {
  var c = a/b
  if (b === 0) {
    return "This is undefined"
  }
  return c
}
function inc(n) {
  ++n
  return n
}
function dec(n) {
  --n
  return n
}
function makeInt(n) {
  n = parseInt(n, 10)
  if (n === n) {
    return n
  }
  else {
    return NaN
  }
}
function preserveDecimal(n) {
  n = parseFloat(n)
  return n
}
