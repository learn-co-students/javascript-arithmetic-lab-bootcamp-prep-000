function add(a,b) {
  console.log(a+b); // add a & b
  return a+b;
}

function multiply (a,b) {
  console.log(a*b); // multiply a & b
  return a*b;
}

function subtract (a,b) {
  console.log(a-b); // subtract a & b
  return a-b;
}

function divide(a,b) {
  console.log(a/b); // divide a & b
  return a/b;
}

function inc(n){
  console.log(n++); // rising inc of n
  return n++;
}

function dec(n) {
  console.log(n--); // dec of n
  return n--;
}

function makeInt(n) {
  console.log(parseInt(n,10)); // parseInt with assumed base of 10
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n, 10); // preserveDecimal of n and return the parsed number
}

function preserveDecimal(n) {
  return parseFloat(n); // preserveDecimal of n and return n
}