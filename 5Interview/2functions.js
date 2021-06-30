// 1. Parameter / return type is not defined in function
// 2. Functional Expression
// 3. Anonymous Function
// 4. IIFI
// 5. Arrow Function
// 6. Function passed in function
// 7. Function returned in function





// Types of function
// Function are First Class Citizens
//define
function sayHello(param) {
    console.log("Hello", param);
    // return can be any-type
}

// fn invocation
sayHello(1);          // No need to define parameter
sayHello([2, 3, 4]);
sayHello("Anuj");
sayHello({ name: "Anuj" });
sayHello();          // No parameter is passed undefined is passed

let temp = sayHello();
console.log(temp);  // No return type, undefined will be returned


// function are treated as a variable

//assignment
let a = [1, 2, 3, 4];
let b = a;
console.log(b);

// Function Expression
// U can put address of function in a variable

let fnContainer = function fn() { //fnContainer will have address of fn
    console.log("I am Expression");
}
fnContainer();

// Anonymous function : without name
let fnAnonymus = function () { //fnContainer will have address of fn
    console.log("I am Anonymous");
}
fnAnonymus();

//IIFI -> Immediately invoked Function expression
// require, pollution, 
(function fn() {
    console.log("I am IIFE, Need no call");
})();

// Arrow Function

let fn = (num1, num2) => { return num1 * num2; }

let fn2 = num => num * num;

console.log(fn(3, 4));
console.log(fn2(3));

// Function are First Class Citizens

// 1.Function is passed as variable -> functional programming,  
// callbacks, higher order function

function sayHi(param) {
    console.log("hi ", param);
    param();
}

function smaller() {
    console.log("I am smaller");
}

sayHi(smaller); // adderss of smaller is passed

// 2. Function is returned as variable
// closure
function outer() {
    console.log("I am outer returning inner");
    return function inner() {
        console.log("I am inner");
    }
}
let rVal = outer();
console.log(rVal);
rVal();