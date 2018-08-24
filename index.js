function add(a, b) 
{
  return a + b;
}

function subtract(a, b)
{
  return a - b;
}

function multiply(a, b)
{
  return a * b;
}

function divide(a, b)
{
  return a / b;
}

function inc(a)
{
  return a + 1;
}

function dec(a)
{
  return a - 1;
}

function makeInt(n)
{
  n = parseInt(n, 10);
  
  return n;
}

function preserveDecimal(n)
{
  n = parseFloat(n);
  
  return n;
}

console.log(makeInt('0x2328'));