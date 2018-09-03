var a = Math.floor(Math.random() * 1000);
var b = Math.floor(Math.random() * 1000);

function add(a, b)
{
 return a + b; 
}


function subtract(a, b)
{
  return a-b;
}

function multiply(a, b)
{
  return a*b;
}


function divide(a, b)
{
  return a/b;
}


function inc(a)
{
  return a +=1;
}

incn();

function dec(a)
{
  return a -=1;
}





function makeInt(n)
{
  return parseInt (n, 10);
}
console.log(makeInt(0*2328));
console.log(makeInt('sldkjflksjf'));
 


function preserveDecimal(n)
{
  return parseFloat(n);
}
console.log(preserveDecimal('2.222'));
console.log(preserveDecimal('sldkjflksjf'));
