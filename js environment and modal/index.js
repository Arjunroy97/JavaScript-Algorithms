console.clear()

/** The JavaScript Programming Environment and Mode */


/** Declaring and Intializing Variables */
var number;
var name;
var rate = 1.2;
var greeting = "Hello, world!";
var flag = false;



/** Arithmetic and Math Library Functions in JavaScript */

// • + (addition)
// • - (subtraction)
// • * (multiplication)
// • / (division)
// • % (modulo)

var x = 3;
var y = 1.1;
console.log(x + y);
console.log(x * y);
console.log((x+y)*(x-y));
var z = 9;
console.log(Math.sqrt(z));
console.log(Math.abs(y/x))





/** Decision Constructs */
/** 
 * • The simple if statement
 * • The if-else statement
 * • The if-else if statement
 */

 var mid = 25;
 var high = 50;
 var low = 1;
 var current = 13;
 var found = -1;
 if (current < mid) {
    mid = (current-low) / 2;
}else if (current > mid) {
    mid = (current+high) / 2;
}else {
    found = current;
}



/** Fatorial Function */
function factorial(val){
    let mul = 1;
    for(let i = val;i >= 1;--i){
        if(val === 0){
            val = 0;
        }else{
            mul *= i;
        }
        
    }
    return mul;
}

console.log(factorial(0))