function add(a,b) {
  return (a+b)
}

function subtract(a,b){
  return (a-b)
}

function multiply (a,b){
  return (a*b)
}

function divide (a,b) {
  return (a/b)
}

function inc(n){
  return (n+=1)
}

function dec(n){
  return (n-=1)
}

function makeInt(n) {
    var parseN = parseInt(n,10) 
    if (isNaN(parseN)) {
      return ("NaN")}
    else return parseN   
    }

function preserveDecimal(n) {
  return parseFloat(n)
}