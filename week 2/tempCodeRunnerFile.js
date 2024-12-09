// creating object using object literal
// Create an object book with properties title, author, and year. Log its details.


const book={
    title:"rich dad poor dad",
    author:"dont know",
    year:1990

};
console.log(book);

//method to get summery of book
getsummery(){
    console.log(this.title +"is written by"+ this.author +"in"+ this.year );
};
book.getsummery;