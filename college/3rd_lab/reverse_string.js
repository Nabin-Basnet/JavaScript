// function reverseString(str) {
//     let reversedStr = '';
//     let index = str.length;

//     do {
//         index--;
//         reversedStr += str[index];
//     } while (index > 0);

//     return reversedStr;
// }

// let originalString = "Hello, World!";
// let reversedString = reverseString(originalString);

// console.log(reversedString);


let str="hello world!";
let index=str.length;
let reversedstr='';
do{
    index--;
    reversedstr=reversedstr+str[index];
}while(index>0);
console.log(reversedstr);