function add(a,b){
  return parseInt(a) + parseInt(b)
}
function subtract(a,b){
  return parseInt(a) - parseInt(b)
}
function multiply(a,b){
  return parseInt(a) * parseInt(b)
}
function divide(a,b){
  return parseInt(a)/parseInt(b)
}
function dec(n){
  n = (parseInt(n)) - 1
  return n
}
function inc(n) {
  n = (parseInt(n)) + 1
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