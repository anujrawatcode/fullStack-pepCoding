console.log("Line 1", temp);
var temp = 10;
console.log("Line 2", temp);

function fn() {
    console.log("Line 5", temp);
    var temp = 20;
    function b() {
        console.log("Line 9", temp);
    }
    b();
    console.log("Line 8", temp);
}
fn();

// Lexical Scope

console.log("Line 1", temp);
var temp = 10;
function b() {
    console.log("Line 9", temp);
}
console.log("Line 2", temp);

function fn() {
    console.log("Line 5", temp);
    var temp = 20;      
    b();
    console.log("Line 8", temp);
}
fn();
