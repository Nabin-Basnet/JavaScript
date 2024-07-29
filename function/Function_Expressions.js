//Function expressions define functions and assign them to variables.
// They are not hoisted, so they cannot be called before they are defined.

const greet = function(name) {
    console.log("Hello, " + name + "!");
};

greet("Bob");  // Outputs: Hello, Bob!
