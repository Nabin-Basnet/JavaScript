// Function declarations and expressions.
// Parameters and return values.
// Arrow functions.


//function
function sum(a,b){
    
    console.log("sum is "+(a+b));
}
sum(5,10);

//Function Expression
// A function expression assigns a function to a variable. Unlike declarations, function expressions are not hoisted.


const greet=function(name){
    console.log(`hello, ${name}`)

}
greet("nabin");


// Function Parameters and Default Values
// You can pass parameters to functions to make them flexible. Default values can also be provided.

const name=function(name){
    console.log(`my name is ${name}`);
}
name("nabin")

// . Return Values
// A function can return a value using the return keyword.

function multiply(a,b){
    return a*b
}

const ans=multiply(10,3);
console.log(ans);

//basic arrow function
const greets = (name) => {
    return `Hello, ${name}!`;
};

console.log(greets("Alice")); // Output: Hello, Alice!
