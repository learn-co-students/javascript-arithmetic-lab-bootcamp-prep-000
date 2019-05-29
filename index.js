function add(x,y) {
  return x+y;
}
function subtract(x,y) {
  return x-y;
}
function multiply(x,y) {
  return x*y;
}
function divide(x,y) {
  return x / y;
}
function parseToInt(x)
{
  return parseInt(x,10);
}
function inc(n) {
  n=n+1;
  return n;
}
function dec(n) {
  n=n-1;
  return n;
}
function makeInt(n) {

  return parseInt(n,10);

}
function preserveDecimal(n) {
  return parseFloat(n);
}
console.log(add(1,2));
console.log(subtract(3,1));
console.log(multiply(2,2));
console.log(divide(2,2));
console.log(parseToInt("2"));
console.log(inc(2));
