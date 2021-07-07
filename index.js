function add(a,b){
  return a += b
}

function subtract(a,b){
  return a -= b
}

function multiply(a,b){
  return a *= b
}

function divide(a,b){
  return a /= b
}

function inc(n){
  n++
  return n
}

function dec(n){
  n--
  return n
}

function makeInt(n){
  var a = parseInt(n, 10)
  return a
}

function preserveDecimal(n){
  var a = parseFloat(n)
  return a
}