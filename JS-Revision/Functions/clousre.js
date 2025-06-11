// Closure - A closure in JavaScript is a function that remembers and has access to its lexical scope, even after the outer function has finished executing and its variables would normally be out of scope.
msg = "very first";
function outer () {
    //let msg = "first";
    // {
    //     msg = "second";
    // }
    let returnVal = function inner () {
        return msg;
     }
     return returnVal;
}
let val = outer();
console.log(val());


// Another closure function example
function createCounter() {
    let count = 0; // private variable
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2

// Closure advantage is data persistence without global variables.
// Used in event handlers, callbacks, currying, memoization, and modules.
// Closures retain access to the scope in which they were created, not where they are executed.

