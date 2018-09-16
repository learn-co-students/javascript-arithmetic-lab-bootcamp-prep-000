console.log(1 + 80) // 81
console.log(60 - 40) // 20
console.log(2 * 3.4) // 6.8 (there's that floating-point airthmetic again...)
console.log(5.0 / 2.5) // 2
var number = 5
console.log(number++) // 5... hmmm
console.log(number) // 6 -- the number was incremented after it was evaluated
console.log(number--) // 6
console.log(number) // 5 -- the number was decremented after it was evaluated
console.log(--number) // 4 -- the number was decremented before it was evaluated
console.log(++number) // 5 -- the number was incremented before it was evaluated 
console.log(number += 3) // 8
var number = 10
function add5() {
  number += 5 
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number) // 3.333

add5()

console.log(number) // 8.333

// reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5

console.log(parseInt('2', 10)) // 2

console.log(parseInt('2.222', 10))    // 2

console.log(parseInt('nonsense!', 10)) 

console.log(parseFloat('80.123999')) // 80.123999