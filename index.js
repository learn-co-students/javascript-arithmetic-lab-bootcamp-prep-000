var numberA = "7"
var numberB = "22"

function add (numberA, numberB){
  return(numberA+=numberB)
}

function subtract(numberB, numberA) {
  return(numberB-=numberA)
}

function multiply(numberA, numberB) {
  return(numberA*=numberB)
}

function divide(numberB, numberA) {
  return(numberB/=numberA)
}

var n = "797"
function inc(n){
  return (++n)
}

function dec(n) {
  return(--n)
}

var n = 787
var a = makeInt("10")
function makeInt(n) {
  return(parseInt(n, a))
}

var n = 4.44
function preserveDecimal(n) {
  return parseFloat(n)
}
