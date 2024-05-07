import React from 'react';
import './ColClues.css';

interface ColCluesProps {
  colClues: number[][];
}

const ColClues: React.FC<ColCluesProps> = ({ colClues }) => {
  return (
    <div className="col-clues">
      {colClues.map((clue, colIndex) => (
        <div key={colIndex} className="col-clue">
          {clue.map((num, index) => (
            <span key={index}>{num}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColClues;

