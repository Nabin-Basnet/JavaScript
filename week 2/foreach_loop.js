// A foreach loop is a way to go through each item in a group, like a list or array, one at a time, 
// without needing to keep track of positions or indexes. It’s useful for doing something to every item, 
// like printing them or applying a change. For example, in JavaScript, you can use array.forEach() to automatically
//  process each item in the array.

let array=[1,3,5,6,8,9,10]

array.forEach(double);
array.forEach(display);

function display(elements){
    console.log(elements);
}

function double(elements,index,array){
    array[index]=elements*2;
}

//forloop in string
let fruits=['apple','mango','orange','banana'];

fruits.forEach(uppercase);
fruits.forEach(dfruits);

function uppercase(items,index,fruits){
    fruits[index]=items.toUpperCase();

}

function dfruits(items){
    console.log(items);
}

