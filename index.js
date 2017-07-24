function add(a, b) {
  return (a + b)
}
console.log(add(2,2))

function subtract(a, b) {
  return (a-b)
}
console.log(subtract(2,2))

function multiply(a, b) {
  return (a * b)
}
console.log(multiply(2,2))

function divide(a, b) {
  return (a / b)
}
console.log(divide(2,2))

function inc(n) {
  return n += 1
}
console.log(inc(2))

function dec(n) {
  return n -= 1
}
console.log(dec(2))

function makeInt(n) {
  return parseInt(n, 10)
}
console.log(makeInt("2"))

function preserveDecimal(n) {
  return parseFloat(n)
}

console.log(preserveDecimal(2.99))
