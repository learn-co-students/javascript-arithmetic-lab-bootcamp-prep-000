message = 'this is a test';
function returnAdd() {
 addnum = 5 + 1;    }
function returnSub() {
 subnum = 5 - 1;     }
function returnMul() {
 mulnum = 5 * 2;    }
function returnDiv() {
 divnum = 15 / 5;    }
returnAdd();
console.log('5+1', addnum);
returnSub();
console.log('5 -1', subnum);
returnMul();
console.log('5 * 2',mulnum);
returnDiv();
console.log('15 / 5',divnum);
Num1 = 5
function returnNum1() {
 Num1 += 3;           }
 function returnNum2() {
  Num1 -= 3;           }
  function returnNum3() {
   Num1 *= 3;           }
   function returnNum4() {
    Num1 /= 3;           }
returnNum1();
  console.log('5+= 3  ',Num1);
  returnNum2();
    console.log('5-= 3  ',Num1);
    returnNum3();
      console.log('5*= 3  ',Num1);
      returnNum4();
        console.log('15/= 3  ',Num1);
// parse int
var Num1 = parseInt('2', 10);	    // 2
console.log('parsetInt: ',Num1);
var Num1 = parseInt('nonsense!', 10) ; 	// NaN – not a number
console.log('parsetInt: ',Num1);
var Num1 = parseFloat('80.123999')     //  80.123999
console.log('parseFloat: ',Num1);
