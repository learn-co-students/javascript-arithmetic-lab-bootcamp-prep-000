
function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b; 
}
function multiply(a, b){
  return  a * b;
}
function divide(a, b){
  return a / b;
}

1 + 80; // 81
60 - 40; // 20
2 * 3.4; // 6.8 (there's that floating-point arithmetic again...)
5.0 / 2.5; // 


function inc(n){
  return  ++n;
}

function dec(n){
  return --n;
}


var number = 5;
 
number++; // 5... hmmmm
 
number; // 6 -- the number was incremented after it was evaluated
 
number--; // 6
 
number; // 5

--number; // 4
 
++number; // 5 

number += 3; // 8

number -= 2; // 3

number *= 10; // 50

number /= 5; // 1



function makeInt(n){
  return parseInt(n, 10)
}

function preserveDecimal(n){
  return parseFloat(n);
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



parseInt('2', 10) // 2

parseInt('2.2222', 10)

parseInt('nonsense!', 10)

parseFloat('80.123999') // 80.123999

