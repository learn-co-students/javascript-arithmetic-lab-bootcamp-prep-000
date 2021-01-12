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

var number = 5

number++ // 5... hmmm
number // 6 -- the number was incremented after it was evaluated
number-- // 6
number // 5

--number // 4 
++number // 5

number += 3 // 8 
number -= 2 // 3 
number *= 10 // 50 
number /= 5 // 1 



var number = 10 

function add5() {
  number += 5 
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number) // 3.333333335

add5()

console.log(number) // 8.333333335

//reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5 

function inc(n) {
  return n += 1 
}
inc(5)

function dec(n) {
  return n -= 1 
}
dec(8)

function makeInt(n) {
  return parseInt(n, 10)
}
makeInt('5')

function preserveDecimal(n) {
  return parseFloat(n)
}
preserveDecimal("HelloWorld!")