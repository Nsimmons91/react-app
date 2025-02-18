import React, { useState } from 'react';
import rockImg from './assets/rock.jpg';
import paperImg from './assets/paper.png';
import scissorsImg from './assets/scissors.png';

// Child Component for displaying current score
const ScoreBoard = ({ score, tries }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  }

  const totalGames = tries 
  const winRatio = totalGames ? ((score.player / totalGames) * 100).toFixed(2) : 0; 
  const lossRatio = totalGames ? ((score.computer / totalGames) * 100).toFixed(2) : 0;  
  return (
    <div>
      <h3>Score</h3>
      <p>Player: {score.player}</p>
      <p>Computer: {score.computer}</p>
      <p>Number of Tries: {tries}</p>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      {showDetails && (
        <div>
          <p>Win Ratio: {winRatio}%</p>
          <p>Loss Ratio: {lossRatio}%</p>
        </div>
        )}
    </div>
  );
};

// Child Component for handling player's choice
const PlayerChoice = ({ onPlayerChoice }) => {
  const choices = [
    {name: 'Rock', img: rockImg},
    {name: 'Paper', img: paperImg},   
    {name: 'Scissors', img: scissorsImg} 
  ];

  return (
    <div>
      <h3>Make your choice</h3>
      {choices.map(choice => (
        <img
        key={choice.name}
        src={choice.img}
        alt={choice.name}
        style={{ width: '100px', cursor: 'pointer', margin: '10px' }}
        onClick={() => onPlayerChoice(choice.name)}
        />
      ))}
    </div>
  );
};

// Main Game Component
const RockPaperScissorsGame = () => {
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [message, setMessage] = useState('');
  const [tries, setTries] = useState(0);

  const playRound = (playerChoice) => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      result = 'You win!';
      setScore(prevScore => ({
        ...prevScore,
        player: prevScore.player + 1,
      }));
    } else {
      result = 'Computer wins!';
      setScore(prevScore => ({
        ...prevScore,
        computer: prevScore.computer + 1,
      }));
    }

    setMessage(`You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`);
    setTries(prevTries => prevTries + 1);
  };

  const randomPlayerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playRound(computerChoice);
  };

  const resetGame = () => {
    setScore({ player: 0, computer: 0 });
    setTries(0);
    setMessage('');
  };

  return (
    <div>
      <h1>Rock Paper Scissors Game</h1>
      <ScoreBoard score={score} tries={tries} />
      <PlayerChoice onPlayerChoice={playRound} />
      <p>{message}</p>
      <button onClick={randomPlayerChoice}>Random Choice</button> 
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default RockPaperScissorsGame;
