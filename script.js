let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-bttn");
let msg = document.querySelector("#msg");

let turnO = true; //player O turns

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8] ];

  boxes.forEach((box)=>{

      box.addEventListener('click',() => {
        if(turnO === true)
        {
          box.innerText = "O";
          turnO = false;
        }
        else{
          box.innerText = "X";
          turnO = true;
        }
        box.disabled = true;

           checkWinner();
      }); 
  });

   const resetGame = () => {
      turnO = true;
      enable();
      msgContainer.classList.add("hide");
      
   }

   const disable = ()=>{
      for(let box of boxes)
      {
        box.disabled = true;
      }
   }

   const enable = () => {
     for(let box of boxes)
      {
        box.disabled = false;
        box.innerText = "";
      }
    
   };

   const showWinner = (winner) => {
      msg.innerText = `congrats! to the player ${winner}`;
      msgContainer.classList.remove("hide");
      disable();

    };

    newGameBtn.addEventListener('click' , resetGame);
    resetBtn.addEventListener('click' , resetGame);

   const checkWinner = () => {
    for (let pattern of winPattern) {
      let pos1Value = boxes[pattern[0]].innerText;
      let pos2Value = boxes[pattern[1]].innerText;
      let pos3Value = boxes[pattern[2]].innerText;
      if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
        if(pos1Value === pos2Value && pos2Value === pos3Value){
          showWinner(pos1Value);
        }
      }

    }

  };



