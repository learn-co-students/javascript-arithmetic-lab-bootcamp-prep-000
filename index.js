// At this point, we can fix the first _four_ broken tests:
// we can define functions `add()`, `subtract()`, `multiply()`, `divide()`
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

// we can increment (`++`) and decrement (`--`) a number if it's assigned to a variable:
function inc(n){
  n++
  return n
}

function dec(n){
  n--
  return n
}

// parses n as an integer and returns the parsed integer
// assumes base 10
// returns NaN as appropriate
function makeInt(n){
  return parseInt(n,10)
}

// preserves n\'s decimals (it parses n as a floating point number) 
// returns the parsed number
// returns NaN as appropriate
function preserveDecimal(n){
  return parseFloat(n)
}
