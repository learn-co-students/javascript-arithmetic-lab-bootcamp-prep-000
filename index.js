function add(a, b){
  //adds two numbers and returns the result:
  return parseFloat(a) + parseFloat(b)
} 


function subtract(a, b) {
    //subtracts b from a and returns the result:
    return parseFloat(a) - parseFloat(b)
} 

function multiply(a, b) {
    //multiplies two numbers and returns the result:
    return parseFloat(a) * parseFloat(b)
}

function divide(a, b) {
    //divides a by b and returns the result:
    return parseFloat(a) / parseFloat(b)
}

function inc(n) {
    //increments n and returns the result:
    return ++n
}
function dec(n) {
    //decrements n and returns the result:
    return --n
}

function makeInt(n) {
    //parses n as an integer and returns the parsed integer:
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    //preserves n's decimals (it parses n as a floating point number) and returns the parsed number:
    return parseFloat(n)
}
