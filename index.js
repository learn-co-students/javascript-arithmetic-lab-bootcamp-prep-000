var a,b = Math.floor(Math.random() * 1000)

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

function inc(a){
  a++;
  return(a);
}

function dec(a){
  a--;
  return(a);
}

function makeInt(n){
  if (n === a.toString()){
    return a.parseInt()
  } else {
    return "returns NaN as appropriate";
  }
