// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(x, y, cb) {
  return cb(x, y);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(x, y) {
  console.log(x + y);
}

function multiply(x, y) {
  console.log(x * y);
}

function greeting(x, y) {
  console.log(`Hello ${x} ${y}, nice to meet you!`);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add);
consume(10,16,multiply);
consume("Mary","Poppins", greeting);

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedfunction() can access the variable internal because through closure, it has access to all function scopes above its own as well as global. Since
// internal is defined in the exterior function, nestedfunction() is able to reach upwards and outwards to grab it.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
