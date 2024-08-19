
// Type conversion in JavaScript refers to converting one data type to another. 
// This can happen either explicitly (when you manually convert a type) or implicitly 
// (when JavaScript automatically converts a type during certain operations).



//string conversion
//You can convert any data type to a string using the String() function or toString() method.
console.log("initial type:")
let num=123;
console.log(typeof(num));

//converting number into string using  String() function
console.log("\nusing String() function:");
let str=String(num);
console.log(typeof(str));


//converting number into string using  toString()function
console.log("\nusing toString() function:");
let str2=num.toString();
console.log(typeof(str2))

