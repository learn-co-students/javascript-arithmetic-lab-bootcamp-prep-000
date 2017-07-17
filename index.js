function add( a, b)
{
  return (a + b)
}

function subtract( a, b )
{
  return (a - b)
}

function multiply( a, b )
{
  return (a * b)
}

function divide( a, b )
{
  return (a / b)
}

function inc( n )
{
  //increments n and returns the result
  return n + 1
}

function dec( n )
{
  //decrements n and returns the result
  return n - 1
}

function makeInt( n )
{
  //parses n as an integer and returns the parsed integer
  //assumes base 10
  return parseInt(n, 10)
}

function preserveDecimal( n )
{
  //preserves n's decimals (it parses n as a floating point number) and returns the parsed number
  return parseFloat(n)
}
