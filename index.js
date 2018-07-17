function add(a, b) {
    var result = a + b;
    return result;
}

var addResult = add(a, b);
console.log(addResult);

function subtract(a, b) {
  var result = a - b;
  return result;
}

var subtractResult = subtract(a, b);
console.log(subtractResult);

function multiply(a,b) {
var result = a*b;
return result;
}

var multiplyResult = multiply(a,b);
console.log(multiplyResult);

function divide(a, b) {
  var result = a/b;
  return result;
}

var divideResult = divide(a, b);
console.log(divideresult);

/// INCREMENT VARIABLE
function inc(n) {
    var result = ++n;
    return result;
}

var incResult = inc(n);
console.log(incResult);

/// DECREMENT VARIABLE
function dec(n) {
    var result = --n;
    return result;
}

var decResult = dec(n);
console.log(decResult);

/// makeInt(n) PARSES N AS AN INTEGER
function makeInt(n) {
  var result = parseInt(n,10);
return result;
}

function preserveDecimal(n) {
  return parseFloat(n,10);
}
