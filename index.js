var a,b

function add(a,b) {
 a+b;
 return;
 }

function subtract(a,b) {
  a-b;
 return;
 }

function multiply(a,b) {
 a*b;
 return;
 }

function divide(a,b) {
  a/b;
 return;
 }
 
 var number = 5;
 function numberInc(number) {
 number++;
 return(number);
 }
 
 function numberDec(number) {
 number--;
 return(number);
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