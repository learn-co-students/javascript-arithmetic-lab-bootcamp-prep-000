function add(a,b){
  return a + b 
}

function subtract(a,b){
  return a - b 
}

function multiply(a,b){
  return a * b
}

function divide(a,b){
  return a / b
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


console.log(add(3,2),subtract(3,2),multiply(3,2),divide(3,2),inc(3),dec(3),makeInt("2"),preserveDecimal('2.222'))