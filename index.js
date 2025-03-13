// Function that receives a function and calls it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I am a named function!");
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I am an anonymous function!");
  };
}

// Testing the functions
receivesAFunction(() => console.log("Callback function executed!")); // Should print the message
const namedFn = returnsANamedFunction();
namedFn(); // Should print "I am a named function!"

const anonymousFn = returnsAnAnonymousFunction();
anonymousFn(); // Should print "I am an anonymous function!"
