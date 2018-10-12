//1 Fu add
function add(num1, num2) {
  
  if (parseInt(num1) && parseInt(num2)) {
    return parseInt(num1,10) + parseInt(num2);
  }
  
  console.log("Please enter numbers only");
  
}


//2 Fu subtract
function subtract(a, b){
  
  return a - b;
  
}


//3 Fu multiply
function multiply(a,b) {
  
  return a * b;
  
}


//4 Fu divide
function divide(a, b) {
  
  return a / b;
  
}


//5 Fu inc
function inc(n) {
  
  return n += 1;
  
}


//6 dec 
function dec(n) {
  
  return n -= 1;

}


//7 makeInt 
function makeInt(n) {
  
  var base = 10;
  return parseInt(n, base);
  
}


//8 preserveDecimal
function preserveDecimal(n) {
  
  return parseFloat(n);
  
}
