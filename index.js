var x = add(1, 80)
var c = substract(60, 40)
var v = multiply(2, 3.4)
var b = divide(5.0, 2.5)
function add(a, b){
  return a + b;
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
var number = 5
number++
number--
number+= 3
number-= 2
number*= 10
number/= 5
var number = 10
function add5() {
  number+= 5
}
function divideBy3(){
  number/= 3
}
divideBy3()
console.log(number)
add5()
console.log(number)
number= 10
add5()
console.log(number)
divideBy3()
console.log(number)
var n = 5
function inc(n){
  n++
  return n
}
function dec(n){
  n--
  return n
}
function makeInt(n){
  return parseInt(n, 10)

  return parseInt(n)

  return parseInt("nonses", 10)
}
function preserveDecimal (n){
 return parseFloat("nonses", 10)
}
function preserveDecimal (n){
  return parseFloat(n, 10)
}