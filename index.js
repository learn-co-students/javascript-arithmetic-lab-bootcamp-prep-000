function add(a, b){
  return a + b;
}
add();

function subtract(a, b){
  return a - b;
}
subtract();

function multiply(a, b){
  return a * b;
}
multiply();

function divide(a, b){
  return a / b;
}
divide();

function inc(n){
  return n += 1;
}

inc();

function dec(n){
   return n -= 1;
}

dec();
// function divideBy3() {
//   number /= 3;
// }
//
// divideBy3();
//
// console.log(number);
//
// add5();
//
// console.log(number);
//
// number = 10;
//
// add5();
//
// console.log(number);
//
// divideBy3();
//
// console.log(number);


function makeInt(n){
  return parseInt(n, 10);
}

makeInt('3');

function preserveDecimal(n){
  return parseFloat(n);
}

preserveDecimal('590.28');
