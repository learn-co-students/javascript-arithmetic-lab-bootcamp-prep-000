var number=10;

function add5(){
  number+=5
}

function divideBy3(){
  number/=3
}
divideBy3()
console.log(number);
add5()
console.log(number);

number=10

add5()
console.log(number);
divideBy3()
console.log(number);
console.log(parseInt('2',10));
console.log(parseInt('2.22'));
console.log(parseInt('nonsense',10));
console.log(parseFloat('2.22'));

 function makeInt(n){
   return parseInt(n)
 }
console.log(makeInt('6.78'));

function preserveDecimal(n){
  return parseFloat(n)
}

console.log(preserveDecimal('34.876543'));
