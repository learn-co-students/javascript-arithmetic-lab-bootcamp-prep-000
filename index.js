// add
function add(a,b) {
	var result = a+b;
	return result;
}
// subtract
 function subtract (a,b) {
	 var result = a-b;
	 return result;
 }
 // multiply
 function multiply(a,b) {
	 var result= a*b;
	 return result;
 }
// divide
 function divide (a,b) {
	 var result= a/b;
	 return result;
 }


// increment
function inc(n) {
	var result =  ++ n;
	return result;
}
// decrement
function dec(n) {
	var result = --n;
	return result;
}
// makeInt
function makeInt (n) {
	return parseInt(n);
}
// makeInt(n) assume base 10
 function makeInt(n) {
	 return parseInt(n,10);
 }
 // preserveDecimal and return parsed number
function preserveDecimal (n) {
	return parseFloat(n);
}
