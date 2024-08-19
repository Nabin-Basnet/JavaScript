// Create a person object
let person = [{ name: "nabin",
                age: 30 },
            {
                name:"nishan",
                age:22,
            }];


console.log("\narray  of person before push and pop",person);


let person2 = { name: "ram", age: 25 };
let person3 = { name: "hari", age: 35 };
console.log(person);


person.push(person2);
person.push(person3);


 console.log("\nArray after adding people:\n", person);

// Remove the last person from the array using pop()
 let removedPerson = person.pop();

// Display the removed person and the updated array
console.log("\nRemoved person:\n", removedPerson);
console.log("\nArray after removing the last person:\n", person);
