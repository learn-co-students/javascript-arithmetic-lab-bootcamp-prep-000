var number = 15
console.log(number++)
console.log(number--)
console.log(number)
console.log(--number)
console.log(++number)
number += 3 // 8
console.log('number += 3 // 8 ', number)
number -= 2 // 3
console.log('number -= 2 // 3 ', number)
number *= 10 // 50
console.log('number *= 10 // 50 ', number)
number /= 5 // 1
console.log('number /= 5 // 1 ', number)




function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}

function inc(n){
  return parseInt(n) + 1
}

function dec(n){
  return parseInt(n) - 1
}

function makeInt(n){
  n = parseInt(n, 10)
  return n
}

function preserveDecimal(n){
  n = parseFloat(n)
  return n
}