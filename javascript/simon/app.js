let gameSeq = [];
let userSeq = [];

let rndmColor = ["yello", "red", "green", "purple"];

let start = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function () {
    if(start ==false){
        console.log("game is started");
        start = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let ranIdx = Math.floor(Math.random() * 3)+1;
    let ranColor = rndmColor[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn);
}
function checkAns(idx){
    
    if(userSeq[idx] == gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML = `Game over! Your Score was <b>${level}</b> <br>  Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white";
        },180);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}