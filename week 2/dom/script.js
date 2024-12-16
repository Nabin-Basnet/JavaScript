// Using the DOM (Document Object Model), you can dynamically
//  interact with and manipulate a list embedded within a paragraph or any part of an HTML
//  document. Here are some examples of what you can do with a
//  list (<ul> or <ol>) inside a paragraph (<p>):

//DOM manipulation
//selecting by id

const button=document.getElementById('button');
button.style.backgroundColor='red';

//selectingby class
const paragraps=document.getElementsByClassName("paragraph")[0];
paragraps.style.backgroundColor='yellow';

// selecting by tagname
const heading=document.getElementsByTagName("h3")[0];
heading.innerHTML='Nabin Basnet';

// querySelector 

const select=document.querySelectorAll("p");
console.log(select);
