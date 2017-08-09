/*
1 + 80 // 81
60 - 40 // 20
2 * 3.4 // 6.8 (there's that floating-point arithmetic again...)
5.0 / 2.5 // 2
```

At this point, we can fix the first _four_ broken tests: we can define functions
`add()`, `subtract()`, `multiply()`, `divide()` in `index.js`.
*/

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1/num2
}

function inc(n) {
  return n+=1
}

function dec(n) {
  return n-=1
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}
// function makeInt(n) {
//   return parseInt(n)
// }
