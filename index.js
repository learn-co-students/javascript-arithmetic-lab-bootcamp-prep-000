/**
 *  add function takes two intger arguments, adds them together and returns the solution
 **/
function add(a, b) {
  return a + b;
}

/**
* subtract function takes two integer arguments, subtracts them and returns the solution
**/
function subtract(a, b) {
  return a - b;
}

/**
 *  multiply function takes two integer arguments, multiplys them and returns the solution
 **/
function multiply(a, b) {
  return a * b;
}

/**
 * divide function takes two integer arguments, divides them and returns the solution
 **/
function divide(a, b) {
  return a / b;
}

/**
* inc function takes one argument, increments it and then returns it
**/
function inc(n) {
  return ++n;
}

/**
 *  dec function takes one argument, decrements it and then returns it
 **/
function dec(n) {
  return --n;
}

/**
* makeInt takes a string that contains numbers in as an argument and returns the numbers as an integer
**/
function makeInt(a) {
  return parseInt(a.toString(), 10);
}

/**
* preserveDecimal takes a string that contains numbers with a decimal point in as an argument and returns
* the numbers as a float
**/
function preserveDecimal (n) {
  return parseFloat(n);
}
