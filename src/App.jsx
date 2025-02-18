import React, { useState } from 'react';
import rockImg from './assets/rock.png';
import paperImg from './assets/paper.png';
import scissorsImg from './assets/scissors.png';

// Child Component for displaying current score
const ScoreBoard = ({ score, tries }) => {
  return (
    <div>
      <h3>Score</h3>
      <p>Player: {score.player}</p>
      <p>Computer: {score.computer}</p>
      <p>Number of Tries: {tries}</p>
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
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default RockPaperScissorsGame;
