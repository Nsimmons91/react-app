import React from 'react';


const ResultDisplay = ({ playerChoice, computerChoice }) => {
 let resultMessage = "";


 if (playerChoice && computerChoice) {
   if (playerChoice === computerChoice) {
     resultMessage = "Tie";
   } else if (
     (playerChoice === "rock" && computerChoice === "scissors") ||
     (playerChoice === "paper" && computerChoice === "rock") ||
     (playerChoice === "scissors" && computerChoice === "paper")
   ) {
     resultMessage = "You Win!";
   } else {
     resultMessage = "Better luck next time";
   }
 }


 return (
   <div className="result-display">
     <div>Player chose: {playerChoice}</div>
     <div>Computer chose: {computerChoice}</div>
     <div>{resultMessage}</div>
   </div>
 );
};


export default ResultDisplay;