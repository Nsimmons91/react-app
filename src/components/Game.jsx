import React, { useState } from "react";
import PlayerChoice from "./PlayerChoice";
import ScoreBoard from "./ScoreBoard";
import ResultDisplay from "./ResultDisplay";


const Game = () => {
 const [playerChoice, setPlayerChoice] = useState("");
 const [computerChoice, setComputerChoice] = useState("");
 const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });


 const handleChoice = (choice) => {
   const choices = ["rock", "paper", "scissors"];
   const computer = choices[Math.floor(Math.random() * choices.length)];
   setComputerChoice(computer);
   setPlayerChoice(choice);


   if (choice === computer) {
     setScore(prev => ({ ...prev, ties: prev.ties + 1 }));
   } else if (
     (choice === "rock" && computer === "scissors") ||
     (choice === "paper" && computer === "rock") ||
     (choice === "scissors" && computer === "paper")
   ) {
     setScore(prev => ({ ...prev, wins: prev.wins + 1 }));
   } else {
     setScore(prev => ({ ...prev, losses: prev.losses + 1 }));
   }
 };


 return (
   <div className="game">
     <PlayerChoice onChoice={handleChoice} selectedChoice={playerChoice} />
     <ScoreBoard wins={score.wins} losses={score.losses} ties={score.ties}/>
      <ResultDisplay playerChoice={playerChoice} computerChoice={computerChoice} />
   </div>
 );
};


export default Game;
