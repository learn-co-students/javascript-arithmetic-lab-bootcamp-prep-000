function add(a, b) {
  return a + b;
}

add(15, 5)

console.log(add)

function subtract(a, b) {
  return a - b ;
}

subtract(45, 10)

console.log(subtract)

function multiply(a, b) {
  return a * b;
}

multiply(2, 10)

console.log(multiply)

function divide(a, b) {
  return a / b;
}

divide(50, 2)

console.log(divide)


function increment(n) {
  return n += 1
}

console.log(increment(35))

function decrement(n) {
  return n -= 1
}

console.log(decrement(40))

function makeInt(string) {
  return parseInt(string, 10)
}

console.log(makeInt('3'))

function preserveDecimal(string) {
  return parseFloat(string)
}

console.log(preserveDecimal(33.3333))
