// callback => A callback is call this function back after you finish your work.

// A callback function is a function passed as an argument to another function

function greet(name) {
  console.log("Hello" + " " + name);
}

// greet("Rohan")
function processUser(callback) {
  let name = "Mohit";
  callback(name);
}

// processUser(greet)
// greet = callback function
// processUser = main function
// processUser calls greet later -> callback

function add() {
  console.log("addition");
}

function sub(a) {
  console.log("substraction");
  a();
}

sub(add);
