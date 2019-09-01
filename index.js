function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide (a, b){
  return a / b
}

function inc(n){
  return ++n
}

function dec(n){
  return --n
}

function makeInt(n){
  return parseInt(n, 10)
}

function preserveDecimal(n){
  return parseFloat(n)
}

add (1, 2)
subtract (10, 5)
multiply (2, 2)
divide(500, 100)
inc(10)
dec(10)
makeInt("10")
makeInt("0x3939")
makeInt("I Love Bumblus Prime!")
preserveDecimal("10.99943")
preserveDecimal("Three Cheers For Bumblus Prime!")