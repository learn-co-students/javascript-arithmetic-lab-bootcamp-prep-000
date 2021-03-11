function add(a = 1, b = 80) {
  return (a + b)}
  
function subtract(a = 60, b = 40) {
  return (a-b)}
  
function multiply(a = 2, b = 3.4) {
  return (a*b)}
  
function divide(a = 5, b = 2.5) {
  return (a/b)}

var number = 10
function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()
console.log(number)
add5()
console.log(number)

number = 10
add5()
console.log(number)
divideBy3 ()
console.log(number)

function increment(number) {
  return number += 1
}

function decrement(number) {
  return number -= 1
}

function makeInt(number) {
  return parseInt (number, 10)
}

function preserveDecimal(number) {
  return parseFloat (number)
}


