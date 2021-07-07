function add(a, b) {
  return `${a + b}`
}
function subtract(a, b) {
  return `${a - b}`
}
function divide(a, b) {
  return `${a / b}`
}
function multiply(a, b) {
  return `${a * b}`
}
function increment(n) {
  return `${n + 1}`
}
function decrement(n) {
  return `${n - 1}`
}
function makeInt(n) {
  console.log (`parses ${n} as an integer and returns the parsed integer`)
  return parseInt(`${n}`, 10)
}
function preserveDecimal(n) {
  console.log ('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number')
    return parseFloat(`${n}`)
}