let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno = true; 
let count = 0; 
const resetGame=()=>{
    turno=true;
    enablebtns();
    msgContainer.classList.add("hide");

}

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turno) {
            btn.innerText = "0";
            turno = false;
        }
        else {
            btn.innerText = "x";
            turno = true;

        }
        btn.disabled = true;
        checkwinner();
    });
});
const disablebtns=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }

};
const enablebtns=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }

};

const showWinner=(winner)=>{
    msg.innerText=`congrulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();

}
const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1=btns[pattern[0]].innerText;
        let pos2=btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                
            }
        }
    }

};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
