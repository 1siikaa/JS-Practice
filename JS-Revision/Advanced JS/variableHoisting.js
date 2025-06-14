// Hoisting refers to the process where a js interpreter appears to move the declarations to the top of the code before execution.
// JS only hoists declarations not initializations. The variable will be undefined until the line where its initialized is reached. 

console.log(greet()); // function call;
function greet (){  // function declaration ----> This can be hoisted so we can call this before declaration.
    return "good morning";     // function definition
}

console.log(a); // undefined (and a should be at least defined) because of hoisting but 10 the value will be assigned after execution of the initialization only.
var a;
a = 12;

console.log(b); // ReferenceError: cannot access b before initialization because of let and const can be hoisted but they remains in the TDZ (temporary dead zone) area until their initialization is reached;
console.log(c); // Referenceerror: cannot access c before initialization because of let and const can be hoisted but they remains in the TDZ (temporary dead zone) area until their initialization is reached;
let b
b = 9;
const c = 8;

/* function expression and class expression does not follows hoisting. */

/* var keyword:
 Hoisting works for variables declared using var keyword. 
*/

/* let and const keywords:
Variables declared with let and const are also hoisted, but they are not initialized, and trying to access them before their declaration will result in a ReferenceError. They are in a "temporal dead zone" until their declaration is reached.
*/

/* Function declarations:
Function declarations are fully hoisted, meaning you can call them before they are defined in the code.
*/

/* Function expressions:
Function expressions are not hoisted, only the variable declaration is hoisted. 
*/



























