console.clear();
/** Stacks Algorithms */



/** A Stack Implementation */

function stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek; 
    this.toString = toString;
    this.length = length;
    this.clear = clear;
}


// data add array element or push function implements
function push(val){
    this.dataStore[this.top++] = val;
}



// data remove array element or pop function implements
function pop(){
    return this.dataStore[--this.top]
}


// data remove end array element or peek function implements
function peek(){
    return this.dataStore[this.top - 1]
}



// data length array element or length function implements
function length(){
    return this.top;
}



// data clear array element or clear function implements
function clear(){
    this.top = 0;
    this.dataStore = [];
}

// ToString function
function toString(){
    return this.dataStore;
}

const Stack = new stack();

// push
// Stack.push("Hi")
// Stack.push("Hello")
// Stack.push(5)
// Stack.push(10)
// console.log(Stack.toString())

// // Pop 
// console.log(Stack.pop())

// // length
// console.log(Stack.length())

// // peek array - 1
// console.log(Stack.peek())

// // clear 
// console.log(Stack.clear())



/** Multiple Base Conversions */

// 2 base throuth 8 or 9
function mulBase(num,base){
    let Stack = new stack();
    do {
        Stack.push(num % base)
        num = Math.floor(num = num / base)
    }while(num > 0){
        let converte = '';
        while(Stack.length() > 0){
            converte += Stack.pop()
        }
        return converte;
    }
}
let num = 32, base = 16;

let numBase =  mulBase(num, base)
// console.log(num + ' converted to base ' + base + ' is ' + numBase )





/** Palindromes Determind */
function isPalindroms(word){
    let Stack = new stack();
    for(let i = 0; i < word.length;++i){
        Stack.push(word[i]);
    }
    let rword = '';
    while(Stack.length() > 0){
        rword += Stack.pop();
    }
    if(word == rword){
        return true;
    }else{
        return false;
    }
}
let word = 'Hello';
if(isPalindroms(word)){
    console.log(word + ' is a palindroms')
}else{
    console.log(word + ' is not a palindroms')
}
word = 'racecar';
if(isPalindroms(word)){
    console.log(word + ' is a palindroms')
}else{
    console.log(word + ' is not a palindroms')
}









/** Demonstrating Recursion */

// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n){
    if(0 === n){
        return 1;
    }else{
        return n * factorial(n - 1)
    }
}



// stack list funciton create factorial function
function fact(n){
    let Stack = new stack();
    while(n > 1){
        Stack.push(n--)
    }
    let product = 1;
    while(Stack.length() > 0){
        product *= Stack.pop()
    }
    return product;
}
// console.log(factorial(5))
// console.log(fact(5))