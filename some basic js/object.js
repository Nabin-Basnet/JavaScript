// learning about object in detail
const person={
    first_name:"nabin",
    middle_name:"jung",
    last_name:"basnet",
    age:20,
    address:"sunderharicha",
    study:"bachlors",
    full_name:function(){
        return this.first_name+" "+this.middle_name+" " +this.last_name;
    },
    contact:{
        email:"nabinbasnet1200@gmail.com",
        phone:9815326723
    }
}
person.country="nepal"
console.log(person.contact.email);
// delete person.country;

console.log(person);
console.log(person.full_name());
for (let x in person){
    console.log(x)
}
