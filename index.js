var number;
function add(a, b){
  number = a + b;
  return number;
}

function subtract(a, b){
  number = a - b;
  return number;
}

function multiply(a, b){
  number = a * b;
  return number;
}

function divide(a, b){
  number = a / b;
  return number;
}

function inc(number){
  number += 1;
  return number;
}

function dec(number){
  number -= 1;
  return number;
}

function makeInt(number){
  return parseInt(number, 10);
}

function preserveDecimal(number){
  return parseFloat(number);
}