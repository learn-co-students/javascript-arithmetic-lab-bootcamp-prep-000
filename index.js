
function add(a, b){
  return a + b;
}


function subtract(a, b){
  return a - b;
}


function multiply(a, b){
  return a * b;
}


function divide(a, b){
  return a / b;
}


var number = 10;

function add5() {
  number += 5;
}

function divideBy3() {
  number /= 3;
}

divideBy3();

console.log(number); //3.333333~

add5();

console.log(number); //8.333333~

console.log('Resetting number..'); number = 10; //reset number

add5();

console.log(number); //15

divideBy3();

console.log(number); //5

//parseInt-ing
console.log('ParseInt-ing...');

console.log(parseInt(2,10));
console.log(parseInt(2.222, 10));
// console.log(parseInt(nonsense, 10)); // Will not run this code. No 'NaN' error.


function inc(n) {
  return ++n;
}

function dec(n) {
  return --n;
}

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}
