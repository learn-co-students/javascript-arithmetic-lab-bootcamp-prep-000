var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a,b){
  return (a + b);
}


beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function subtract(a,b){
  return (a - b);
}


beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function multiply(a,b){
  return (a * b);
}


beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function divide(a,b){
  return (a / b);
}

function inc(n){
   return ++n;
}

function dec(n){
  return --n;
}

function makeInt(n){
  return parseInt(n, 10);
  
}

function preserveDecimal(n){
  if (parseInt(n) === 'NaN'){
    return ('NaN')}
  else {return parseFloat(n);
    }
}
  

