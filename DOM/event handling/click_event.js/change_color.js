let colors=["red","blue","green","yellow","black"];
index=0;

document.getElementById("clickButton").addEventListener("click",()=>{
    document.getElementById("clickMessage").textContent='button was clicked!';
});

document.getElementById("submitButton").addEventListener("click",()=>{
    const input=document.getElementById("textInput").value;
    document.getElementById("inputMessage").textContent=`you typed : ${input}`;

});



document.getElementById("changeColorButton").addEventListener("click",()=>{
    document.body.style.background=colors[index];
    index=(index+1)%colors.length;

});




document.getElementById("formSubmitButton").addEventListener("click",()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    document.getElementById("formMessage").innerHTML=`name :${name} <br> email: ${email}`;

});