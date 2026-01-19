let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset-btn");
let NewGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trueO = true; //playerX, PlayerO

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trueO) {             //playerO
      box.innerText = "O";
      trueO = false;
    } else {                //playerX
      box.innerText = "X";
      trueO = true;
    }  
    box.disabled = true;    
    
    checkWinner();
  });
});


// 🧠 Real-Life Analogy (Very Important)
// Think of a light switch:
// ON (true) → O plays   
// OFF (false) → X plays
// Every click flips the switch.
// If you understand a light switch, you understand this logic.

const disableBoxes = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for(let box of boxes) {
    box.disabled = false;
   box.innerText = "";
  }
}

const showWinner = (winner) => {
  msg.innerText = `congrats, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};


const checkWinner = () => {
  for(let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;  
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    //Check if positions are not empty
    if (pos1Val != "" && pos2Val != "" && pos3Val != "")
      //Check if all three positions have the same value
    if (pos1Val == pos2Val && pos2Val == pos3Val) {
      // console.log("Winner", pos1Val);
      showWinner(pos1Val)
      
    }
  }
}


const resetGame = () => {
  trueO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
}

NewGamebtn.addEventListener("click", resetGame);
ResetBtn.addEventListener("click", resetGame);