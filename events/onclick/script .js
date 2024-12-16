let btn=document.getElementById("btn");
let body=document.getElementById("body")

btn.onclick=()=>{
    if(body.style.backgroundColor=="white"){
        body.style.backgroundColor="black";
        btn.style.backgroundColor="white";
        btn.style.color="black";
    }
    else{
        body.style.backgroundColor="white";
        btn.style.backgroundColor="black";
        btn.style.color="white";
    }

}