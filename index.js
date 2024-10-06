// declare variale for score
let userScore = 0;
let compScore = 0;

//declare variable for choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
  //rock paper, scissor
  const options = ["rock","paper","scissors"];
  const randomIdx = Math.floor(Math.random()*3);
  return options[randomIdx];
}

const drawGame = () =>{
  msg.innerText = "Game was Draw. Play again";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) =>{
  // Generate computer choice -> modular programming
  const compChoice = genCompChoice();
  if(userChoice == compChoice){
    // Draw game
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      // comp choice (scissor,paper)
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      // rock , scissor
      userWin = compChoice === "scissors" ? false : true;
    }else{
      // rock paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
}

choices.forEach(choice =>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
});
