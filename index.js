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
function inc(n) {
  return n += 1
}
function dec(n) {
  return n -= 1
}
function makeInt(n) {
  return parseInt(n,10)
}
function preserveDecimal(n) {
  return parseFloat(n)
}
console.log(parseInt('2.2222', 10))
console.log(makeInt('2.2222'))
console.log('2000')
console.log(2000)
console.log(makeInt("50.55555"))
