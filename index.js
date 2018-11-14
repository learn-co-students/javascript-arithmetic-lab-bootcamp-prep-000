const add = (x, y) => x+y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const inc = (a) => a+=1;
const dec = (thisIsJustAPlaceholderDontMindMe) => thisIsJustAPlaceholderDontMindMe-=1;

// const makeInt = (n) => parseInt(n, 10);

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(a) {
  return parseFloat(a);
}
