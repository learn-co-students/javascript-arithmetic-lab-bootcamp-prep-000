function add(){
  return (1+1)
}
function subtract(){
  return (5-4)
}

function multiply(){
  return (4*8)
}

function divide(){
  return (10/2)
}

function add(a,b){
  return (a+b)
}

function subtract(a,b){
  return (a-b)
}

function multiply(a,b){
  return (a*b)
}

function divide(a,b){
  return (a/b)
}

// note: this one (and the next) needs 2 steps to first increment, and then return
function increment(n){
 n++
 return n
}

function decrement(n){
  n--
  return n
}
// had to create a variable "parsed" to return after operation 
function makeInt(n){
  var parsed = parseInt(n,10)
  return parsed 
}

function preserveDecimal(n){
  var parsedF = parseFloat(n)
  return parsedF
}
