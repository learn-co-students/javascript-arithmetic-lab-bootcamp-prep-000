
function add(a, b) {
 console.log('add a, b')
 return a + b
}

function subtract(a, b) {
  console.log('subtract a, b')
  return a - b
}

function multiply(a, b) {
 console.log('multiply a,b')
 return a * b
}

function divide(a, b) {
  console.log('divide a,b')
  return a / b
}

function inc(n) {
  var a = n
  return a += 1
}

function dec(n) {
  var a = n
  return a -= 1
}

function makeInt(n) {
  var a = n
  console.log(parseInt( a, 10))
  return parseInt(a, 10)
}
function preserveDecimal(n){
  var a = n
  console.log(parseFloat(a))
  return parseFloat(a)
}
