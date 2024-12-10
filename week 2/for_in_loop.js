// The for...in loop in JavaScript is used to iterate over the keys or property names of an object or the indices of an array

let student={
    name:"nabin",
    age:20,
    course:"BCA"
};

for(let key in student){
    console.log(key ,":",student[key]);
}

let name="nabin";
for(let l in name){
    console.log(l);
}


// the major differences between for...in loop and for...of is The for...in loop iterates over the keys or property names 
// of an object or the indices of an array, while the for...of loop iterates over the values of an 
// iterable like arrays, strings, maps, or sets. For example, for...in is better for objects to access property 
// names, whereas for...of is ideal for directly accessing the values in arrays or other collections.
