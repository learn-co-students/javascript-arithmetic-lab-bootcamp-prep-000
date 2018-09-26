number=10 ;

function add5 ()
{
  number+=5;  
}

function divideBy3 ()
{
  number/=3 ;
}

divideBy3 ();
console.log(" number :" ,number);

add5 ();
console.log(" number =" ,number);

number=10 ;

add5();
console.log(" number =" ,number);

divideBy3();
console.log(" number =" ,number);

console.log(parseInt('2',10));
console.log(parseInt('2.2222',10));

console.log(parseFloat('80.123999'));
var a=3,b=5;
function add(a, b)
{
  return (a+b);
}

function subtract(a, b)
{
  return (a-b);
}

function multiply(a, b)
{
  return (a*b);
}

function divide(a, b)
{
return (a/b);
}

var n=10;

function inc(n)
{
  n++;
  return n;
}

function dec(n)
{
  n--;
  return n;
}

function makeInt(n)
{
  return (parseInt(n));
}

function makeInt(n=10.2346843)
{
  return(parseInt(n,10));
}

function preserveDecimal(n)
{
  return(parseFloat(n));
}


