function add(a,b)
{
  var num = a+b;
  return num;
}
add(1,2);
function subtract(a,b)
{
  var num = a-b;
  return num;
}
subtract(1,2);
function multiply(a,b)
{
  var num = a*b;
  return num;
}
multiply(1,2);
function divide(a,b)
{
  var num = a/b;
  return num;
}
divide(1,2);
function inc(n)
{
  n++;
  return n;
}
inc(1);
function dec(n)
{
  n--;
  return n;
}
dec(2);
function makeInt(n)
{
  return parseInt(n, 10);
}
makeInt('1.2');
makeInt('10');
makeInt('no');
function preserveDecimal (n){
  return parseFloat(n);
}
preserveDecimal(1.2);
preserveDecimal('no');


