// Learn about Conditional Statements to introduce decision-making in your programs. 

let input=1;
console.log("your input is "+ input);


//using if statement
if(input%2==0){
    console.log("even");
}

//using if else ststement
if(input%2==0){
    console.log("even");
}
else{
    console.log("odd number")
}

//using else if statement
let x=6;
let y=9;
let z=5;

if(x>y && y>z){
    console.log("x is greatest");
}
else if(z>x){
    console.log("z is greatest");
}
else{
    console.log(" y is greatest")
}

//switch statement
let day=6;

switch(day){
    case 1:console.log("sunday");break;
    case 2:console.log("monday");break;
    case 3:console.log("tuesday");break;
    case 4:console.log("wenesday");break;
    case 5:console.log("thirsday");break;
    case 6:console.log("friday");break;
    case 7:console.log("saturday");break;
    default:console.log("wrong choice");
}