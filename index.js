
function add(a,b) {
  return a+b; 
 }

function subtract(a,b) {
  return a-b; 
 }

function multiply(a,b) {
 return a*b; 
 }

function divide(a,b) {
return a/b; 
 }


 function numberInc(a) {
 a+=1;
 return a;
 }
 
 function numberDec(a) {
 a--;
 return a;
  }
 
var number = 10;
function add5() {
  number+=5;
 }
 
 function divideBy3() {
   number/=3;
 }
 
 divideBy3();
 console.log(number);
 
 add5();
 console.log(number);
 
number = 10;
add5();
console.log(number);
divideBy3();
console.log(number);

function inc(n) {
 a+=1;
  return n;
}

function dec(n) {
  a-=1;
  return n;
}