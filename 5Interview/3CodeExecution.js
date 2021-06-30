// Execution Context in Js is the wrapper in which JS code runs as there is no main() in it
// It contains
// 1. Global object
// 2. This object
// 3. Variable Enviroment

console.log(global);
console.log(this);//

console.log("a is ", a);
var a;
console.log("a is ", a);
a = 10;
console.log("a is ", a);


fn();
function fn() {
    console.log("I can be called before execution and after it also");
}
fn();


// Q1

function real() {
    console.log("real 1");
}
function real() {
    console.log("real 2");
}
function real() {
    console.log("real 3");
}
real();

//Q2
console.log(varName);
var varName;
console.log(varName);
var varName = "Anuj";
console.log(varName);


temp();
function temp() {
    console.log("temp function");
}
temp();

fnContainer(); // This will genterate error
var fnContainer = function () {
    console.log("I am a continer function")
}
fnContainer();

