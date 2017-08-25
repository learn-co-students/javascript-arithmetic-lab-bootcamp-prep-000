var a = 4
var b = 9
function add(a,b) {
  return a + b
}
function subtract(a,b) {
  return a - b
}
function multiply(a,b) {
  return a * b
}
function divide(a,b) {
  return a/b
}
function inc(a) {
  a += 1
  return a
}
function dec(a) {
  a -= 1
  return a
}
function makeInt(a) {
  if (a = 3.5) {
    return parseInt(a,10)
  }
  else if (a = 0.24) {
    return parseInt(a,10)
  }
  else(a = "come") {
    return parseInt('come',10)
  }
}
function preserveDecimal(a) {
  if (a = 2.222) {
    return parseFloat(a)
  }
  else(a = "come") {
    return parseFloat(a)
  }
}
