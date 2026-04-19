let boxes = document.querySelectorAll("#box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg");    //winner
let newGame = document.querySelector("#new-game");  //new game button

let turnO= true;    //playerO & playerX

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       console.log("Box was clicked");
       
       if(turnO){
           //player 0
           box.innerText = "O";
           turnO = false;
       }
       else{
         // player X
         box.innerText = "X";
         turnO = true;
       }
    box.disabled = true;
    checkWinner();

    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
       
    }
}

showWinner = (Winner) => {
     msg.innerText = `Congratulations, Winner is ${Winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
}

checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
     
      if (pos1Val != "" && pos2Val != "" && pos3Val != ""){

        if (pos1Val === pos2Val && pos2Val === pos3Val){
          console.log("WINNER", pos1Val);
          showWinner(pos1Val);
        };
      };
    };
};

resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); 
}


reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
