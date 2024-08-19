//You can convert strings and other data types to numbers using the Number() function, parseInt(), or parseFloat().

//initially string
let str="123abc";
console.log(typeof(strr));
console.log(str);

// converting to number using Number() function
let num=Number(str);
console.log("\nconverted to number using Number() function:")
console.log(typeof(num));
console.log(num);


//converting to number using parseInt() function
console.log("\nconverted to number using parseInt() function:")
let num2=parseInt(str);
console.log(typeof(num2));
console.log(num2);


//converting float using parseFloat() function
console.log("\nconverted to number using parseFloat() function:")
let num3=parseFloat(str);
console.log(typeof(num3));
console.log(num3);

