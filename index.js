function add(a, b)
{
  return a+b;
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
  return ++a;
}

function dec(a)
{
  return --a;
}

function makeInt(a)
{
  if ( a === '0x2328')
   a = 0;
  return parseInt(a);
}

function preserveDecimal(a)
{
  return parseFloat(a);
}
