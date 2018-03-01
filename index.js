var a, b;

function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a * b;
}
function divide(a,b){
  return a / b;
}

a=1;
b=80;
console.log(add(a,b))
a=60;
b=40;
console.log(subtract(a,b))
a=2;
b=3.4;
console.log(multiply(a,b))
a=5.0;
b=2.5;
console.log(divide(a,b))

var number = 10
function add5() {
  number += 5
}
function divideBy3(){
  number /=3
}

function inc(n){
  return n+1;
}
function dec(n){
  return n-1;
}

divideBy3()
console.log(number)
add5()
console.log(number)
number = 10
add5()
console.log(number)
divideBy3()
console.log(number)
console.log(inc(number))
console.log(dec(number))


function makeInt(n){
   return parseInt(n, 10);
}
function preserveDecimal(n){
   return parseFloat(n);
}

var n='2.2222';
console.log(makeInt(n))
n='nonsense!';
console.log(makeInt(n))

n='80.123999';
console.log(preserveDecimal(n))










