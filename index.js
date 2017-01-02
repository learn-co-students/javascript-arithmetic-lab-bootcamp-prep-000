function add(a,b) {
  var result = a + b
  return result
}
add(5, 5);

function subtract(a,b) {
  var remainder = a - b
  return remainder
}
subtract(10,3);

function multiply(a,b) {
  var product = a * b
  return product
}
multiply(12, 12);

function divide(a,b) {
  var quotient = a/b
  return quotient
}
divide(12,6);

function inc(n) {
  var incrementor = n += 1
  return incrementor
}
inc(3);

function dec(n) {
  var decrementor = n -= 1
  return decrementor
}
dec(32);

function makeInt(n) {
var sumth = parseInt(n, 10)
    return sumth

}
makeInt('732');
makeInt("876");
makeInt("hello");


function preserveDecimal(n) {
  var parsed = parseFloat(n)
  return parsed
}
preserveDecimal();
// notes for parseInt and parseFloat when dealing with functions in general it is beter to be generic as possible because you do not know what the test sample will be.
