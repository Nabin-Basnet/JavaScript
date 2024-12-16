let body=document.getElementById("body");
let btn=document.getElementById("btn");
let img=document.getElementById("img")

console.log("btn click");

btn.onclick=()=>{
    if(btn.innerText=="OFF"){
        body.style.backgroundColor="black";
        img.src="assets/lightoff.png"
        btn.innerText="on"

    }
    else{
        body.style.backgroundColor="yellow"
        img.src="assets/lighton.png"
        img.style.height="300px"
        btn.innerText="OFF"
    }
}