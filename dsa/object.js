//An object is a collection of key-value pairs. Objects can be used to store related data and functions together.
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

console.log(person.name);  // 'John'


console.log(person);

person.greet();  // 'Hello, John'

//Access Property:
let name = person.name;  // 'John'
let age = person['age'];  // 30

//Add/Update Property:
person.job = 'Developer';
person.age = 31;
console.log(person);

//Delete Property:
delete person.job;
console.log(person);



