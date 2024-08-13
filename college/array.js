const student=["nabin","ram","hari","shyam","raja ram"];
console.log("lenhth of array is :",student.length);   //array method length


console.log("In 4th place there is : ",student[3]);               //display array according to index


console.log("your students are:",student.toString());            //array method tostring

console.log("Get the third element of fruits using at():",student.at(2))        //Get the third element of fruits using at():

console.log("push in array",student.push("pratik"));   //pushing an element at last
console.log(student);

student.pop();            //pop an element from last
console.log(student);



student.shift();             //remove an element  from front
console.log(student);

student.unshift("nabin");      //unshift remove element from front
console.log(student);

student.splice(2,0,"rajesh","ramesh");
console.log(student);

const neww=student.slice(2,4);
console.log(neww);

