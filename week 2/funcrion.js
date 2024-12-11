//simple function
function sum(a,b){
    s=a+b;
    return s;

}
sum(10,14);
console.log(s);

//arrow function
const sub=(a,b)=>{
    m=a-b;
    return m;

}

sub(10,5);
console.log(m);

//function which takes string as argument and count number of vowels in string
let count=0,i=0;
function vowelsCounter(str){
    for(let letter of str){
        console.log(letter);
        if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u'){
            count+=1;
        }
    }
    return count;
}
vowelsCounter("my name is nabin basnet. i read in itahari namuna college");
console.log(count);

// doing same task using arrow counter
const vowel=(str)=>{
    for(let letter of str){
        console.log(letter);
        if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u'){
            i+=1;
        }
    }
    return count;
}
vowel("hello every one");
console.log(i);