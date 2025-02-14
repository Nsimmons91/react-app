import React from "react";
import scissorsImg from "./scissors.png";
import paperImg from "./paper.png";
import rockImg from "./rock.jpg";

const PlayerChoice = ({ onChoice, selectedChoice }) => {
  const gameChoices = [
    { type: "rock", icon: rockImg },
    { type: "paper", icon: paperImg },
    { type: "scissors", icon: scissorsImg }
  ];

  return (
    <div className="player-choice">
      {gameChoices.map(({ type, icon }) => (
        <button
          key={type}
          onClick={() => onChoice(type)}
          style={{
            backgroundColor: selectedChoice === type ? "lightblue" : "white"
          }}
        >
          <img
            src={icon}
            alt={type}
            style={{ width: "50px", height: "50px" }}
          />
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </button>
      ))}
    </div>
  );
};

export default PlayerChoice;
