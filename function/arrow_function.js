//Arrow functions provide a shorter syntax for writing function expressions. 
//They do not have their own this, arguments, super, or new.target bindings.

const greet = (name) => {
    console.log("Hello, " + name + "!");
};

greet("Carol");  // Outputs: Hello, Carol!
