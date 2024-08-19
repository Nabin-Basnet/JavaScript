// The for...in loop is used to iterate over the enumerable properties (keys) of an object. 
// It is often used for objects but can also be used for arrays, although it's not recommended for arrays.
let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
    console.log(key + ": " + person[key]);  // Outputs "name: John", "age: 30", "city: New York"
}


//using with array
// let arr=[12,14,20,100,500,600,400];
// for(let index in arr){
//     console.log(arr[index]);
// }


