function add(a,b) {
  var x = a+b 
  return x
}

function subtract(a,b){
  var y = a-b 
  return y
}

function multiply(a,b){
  var z = a*b
  return z
}

function divide(a,b){
  var w = a/b
  return w
}

function inc(n){
  n += 1 
  return n
}

function dec(n){
  n -= 1
  return n
}

function makeInt(n)
{
  var parse = parseInt(n,10)
  return parse
}

function preserveDecimal (n){
  var product = parseFloat(n)
  return product
}
