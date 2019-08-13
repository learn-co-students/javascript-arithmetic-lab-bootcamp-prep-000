var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a, b){
  var solution = a + b 
  return solution
}

function subtract(a, b){
  var solution = a - b 
  return solution
}

function multiply(a, b){
  var solution = a * b 
  return solution
}

function divide(a, b){
  var solution = a / b 
  return solution
}

function inc(a){
  var solution = a
  solution +=1 
  return solution
}

function dec(a){
  var solution = a
  solution -=1 
  return solution
}

function makeInt(n){
  var integer = parseInt(n, 10)
  return integer
}

function preserveDecimal(n){
  var float = parseFloat(n, 10)
  return float
}