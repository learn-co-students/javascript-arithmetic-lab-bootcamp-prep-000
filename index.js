function add(x, y) {
  return x + y
}
add(1, 80)

function subtract(x, y) {
  return x - y
}
subtract(60, 40)

function multiply(x, y) {
  return x * y
}
multiply(2, 3.4)

function divide(x, y) {
  return x / y
}
divide(5.0, 2.5)

function inc(n) {
  return n += 1
}
inc(3)

function dec(n) {
  return n-= 1
}
dec(3)

function makeInt(n) {
  return parseInt(n, 10)
}
makeInt(4.76)

function preserveDecimal(n) {
  return parseFloat(n, 10)
}
preserveDecimal(4.76)
