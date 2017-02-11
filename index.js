function add(a,b) {
  return (a + b)
}
function subtract(a,b) {
  return (a - b)
}
function multiply(a,b) {
  return (a * b)
}
function divide(a,b) {
  return (a / b)
}
function inc(n) {
  var number = n
  return (number+=1)
}
function dec(n) {
  var number = n
  return (number-=1)
}
function makeInt(n) {
  var number = parseInt(n,10)
  return number.toString()
}
function preserveDecimal(n) {
  var number = n
  return n.toString()
}