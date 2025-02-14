import React, { useState } from "react";
import PlayerChoice from "./PlayerChoice";
import ScoreBoard from "./ScoreBoard";
import ResultDisplay from "./ResultDisplay";


const Game = () => {
  const [userSelection, setUserSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");
  const [gameStatistics, setGameStatistics] = useState({
    wins: 0,
    losses: 0,
    ties: 0,
  });


  const handleUserSelection = (playerChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setUserSelection(playerChoice);
    setComputerSelection(computerChoice);

    setGameStatistics((prevStats) => {
      if (playerChoice === computerChoice) {
        return { ...prevStats, ties: prevStats.ties + 1 };
      } 
      
      if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        return { ...prevStats, wins: prevStats.wins + 1 };
      } 
      
      return { ...prevStats, losses: prevStats.losses + 1 };
    });
  };

  return (
    <div className="game">
      <PlayerChoice onUserSelection={handleUserSelection} selectedOption={userSelection} />
      <ScoreBoard
        wins={gameStatistics.wins}
        losses={gameStatistics.losses}
        ties={gameStatistics.ties}
      />
      <ResultDisplay
        userSelection={userSelection}
        computerSelection={computerSelection}
      />
    </div>
  );
};

export default Game;
