//An array is an ordered list of values. Arrays can hold multiple values of any type, including other arrays and objects.
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'two', true, null, { name: 'Alice' }];

console.log(numbers[0]);  // 1
console.log(mixed[4].name);  // 'Alice'

//push at last
numbers.push(6);
console.log(numbers); 

//pop from last
let last = numbers.pop();
console.log(numbers); 
