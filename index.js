a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a,b){
  return a+b
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return b*a
}

function divide(a,b){
  return a/b
}

function inc(n){
  return n += 1
}

function dec(n){
  return n -= 1
}

function makeInt(n){
  return parseInt(n,10)
}

function preserveDecimal(n){
  return parseFloat(n)
}


add(1,80)
subtract(60,40)
multiply(2,3.4)
divide(5.0/2.5)
inc(5)
dec(5)
makeInt(5.67)
preserveDecimal("7.897")