let number;
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
function inc(a){ //Increment a by 1 and return the result.
  number = a + 1;
  return number;
}
function dec(a){ //Decrement a by 1 and return the result.
  number = a - 1;
  return number;
}
//Parse a as an integer and return that integer.
function makeInt(a){ 
  number = parseInt(a, 10);
  return number;
}
//Parse a as a float (number with decimals) and return that number.
function preserveDecimal(a){ 
  number = parseFloat(a, 10);
  return number;
}