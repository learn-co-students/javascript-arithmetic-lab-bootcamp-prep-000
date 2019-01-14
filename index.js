function add(a, b) {
  return a+b
}
function subtract(a, b) {
  return a-b
}
function multiply(a, b) {
  return a*b
}
function divide(a, b) {
  return a/b
}

function inc(n) {
  var number = n
  return n+1
}
function dec(n) {
  var number = n
  return n-1
}
function makeInt(n){
 var integer = parseInt(n)
 var parsed = parseInt(n, 10)
 if (isNaN(parsed)) { return NaN}
 else {return parsed}
}
function preserveDecimal(n) {
  var number = n
 return parseFloat(n)
}