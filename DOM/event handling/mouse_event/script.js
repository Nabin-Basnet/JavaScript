const button=document.getElementById("clickButton");
const massage=document.getElementById("clickMessage")


button.addEventListener('mouseover',()=>{
    massage.textContent = 'Mouse over the box!';
})