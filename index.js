function add(a,b){
   return (a + b);
}

function subtract(a,b){
   return (a-b);
}

function multiply(a, b){
   return(a*b);
}

function divide(a, b){
   return (a/b);
}

function inc(n){
  return(n+1);
}

function dec(n){
  return (n-1)
}

function makeInt(n){
  var parsed = parseInt(n, 10)
  
 return parsed
 
  if( n === 0 ){
  return (n * 0)
  }
  
  else if( isNaN(parsed)){
  return true;
  }
  else{
    return n
  }
}
  
function preserveDecimal(n){
 
 return (parseFloat(n));
 
 if(isNaN(n)){
   return true;
 }
  
}

  
  
  
  
  
  
  
  
  
  
  
  
  