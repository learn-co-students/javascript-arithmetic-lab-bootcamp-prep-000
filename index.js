// 1 + 80 // 81
// 60 - 40 // 20
// 2 * 3.4 // 6.8 (there's that floating-point arithmetic again...)
// 5.0 / 2.5 // 2

var a, b
function add (a,b)
{
  add = a+b
  return add
}

var a, b
function subtract (a,b)
{
  subtract= a-b
  return subtract
}


var a, b
function multiply(a, b)
{
  multiply= a*b
  return multiply
}


var a, b
function divide(a, b)
{
  divide= a/b
  return divide
}

var a
function inc(a) {
  inc = a+1
  return inc
}


function dec(a) {
  dec = a-1
  return dec
}
function makeInt(a) {
  makeInt = parseInt(a, 10)
  return makeInt
}

function preserveDecimal(a) {
  preserveDecimal = parseFloat(a)
  return preserveDecimal
}
