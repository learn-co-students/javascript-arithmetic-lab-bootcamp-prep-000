
function add(x, y) {
  return (x + y);
}

function subtract(x, y){
  return (x - y);
}

function multiply(x, y) {
  return (x * y);
}

function divide(x, y) {
    return(x / y);
}

function inc(n) {
  return n += 1;
}

function dec(n){
  return n -= 1 ;
}

function makeInt(n) {
  return parseInt(n);
}

function preserveDecimal(n) {
  return parseFloat(n);
}

function makeInt(n){
  return parseInt(n, 10);
}

// console.log(dec(6));
// console.log(dec(6.666));
// console.log(dec(6.66634));

// console.log(`"This is how you add" ${x} + ${y} =  ${add(x, y)}`);
// console.log(`"This is how you subtract" ${x} - ${y} =  ${subtract(x, y)}`);
// console.log(`"This is how you multiply" ${x} * ${y} =  ${multiply(x, y)}`);
// console.log(`"This is how you divide" ${x} / ${y} =  ${divide(x, y)}`);
