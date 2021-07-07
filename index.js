var a,b;

a= Math.floor(Math.random() *1000);
b= Math.floor(Math.random() *1000);

function add(a,b){
return a+b;
}
 
add();

function subtract(a,b){
  return a-b;
}

subtract();


function multiply(a,b){
  return a*b;
}

multiply();

function divide(a,b){
  return a/b;
}

divide();

function inc(n){
  return n+=1;
}

inc();

function dec(n){
  return n-=1;
}

dec();


function makeInt(n){
  return parseInt(n, 10); //working with base 10! so it is rounding everything to first decimal 
}

makeInt();

function preserveDecimal(n){
  return parseFloat(n);
}

preserveDecimal();



