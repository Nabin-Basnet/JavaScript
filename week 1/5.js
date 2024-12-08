// here we will learn about loop

let x=10;

//using for loop to print number from 0-10
// for(let i=0;i<=x;i++){
//     console.log(i);
// }

//using while loop to print even upto 20
let a=1;
while(a<=20){
    if(a%2==0){
        console.log(a);
    }
    a++;
}


// a do...while loop to print the multiplication table of 5 up to 10 times.

let b=5;
let j=1
do{
    let m=b*j;
    console.log(b +"*"+ j +"="+ m);
    j++;
}while(j<=10);


//for of
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}

//for of loop
let person = {
    name: "John",
    age: 25,
    country: "USA"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}




