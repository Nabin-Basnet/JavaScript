let num=[1,4,6,7,9,5,7,4];
console.log(num);

for(let i of num){
    console.log(i);
}

for(let i in num){
    console.log("In nedex ",i,":",num[i]);
}
console.log("length of array is: ",num.length)


//array indics
num[5]=10; //certain value of array can be change
console.log(num[5]);