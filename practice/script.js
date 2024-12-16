const username=document.getElementById("name");
const password=document.getElementById("password");
const form=document.getElementById("form");
const error=document.getElementById("error-massege");


form.addEventListener('submit',function(event){
    event.preventDefault();

    if(username.value.trim() ==='' || password.value.trim()===''){
        error.innerHTML='';
    
    }
    else{
        error.innerHTML=''
    }
    console.log('jsacse')



   
});

