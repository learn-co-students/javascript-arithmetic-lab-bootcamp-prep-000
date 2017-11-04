function add(a,b){
  number=a+b
  return number
}

function subtract(a,b){
  number=a-b
  return number
}
function divide(a,b){
  number=a/b
  return number
}

function inc(n){
number += n
return number
}
function dec(n){
number -= n
return number
}

function makeInt('10',10){
  number=10
  parseInt('10')
console.log(number)
}
function preserveDecimal(n){
parseInt('nonsense')
number=nonsense
console.log(number)
}

function multiply(a,b){
  number=a*b
console.log(number)
}


var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number) // 3.333333333335

add5()

console.log(number) // 8.333333333335

// reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5
