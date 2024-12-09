// creating object using object literal
// Create an object book with properties title, author, and year. Log its details.


const book={
    title:"rich dad poor dad",
    author:"dont know",
    year:1990,
    getsummery(){
        console.log(this.title +" is written by "+ this.author +" in "+ this.year );
    }

};
console.log(book);

//method to get summery of book

book.getsummery();

//changing object property
//updating object property
book.author="nabin basnet";

console.log(book);

//adding property

book.price=5000;
console.log(book);

//deleting property
delete book.author;
console.log(book);
