// bad.js

// ❌ 'x' is defined but never used → no-unused-vars
let x = 42;

// ❌ '==' instead of '===' → eqeqeq
if (x == "42") {
    console.log("Loose comparison is bad!");
}

// ❌ Missing semicolon → semi
console.log("Hello world")

// ❌ console.log in production code → no-console
function greet(name) {
    console.log("Hello " + name);
}

// ❌ var instead of let/const → no-var
var message = "Avoid using var!";
