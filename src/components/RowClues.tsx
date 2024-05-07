import React from 'react';
import './RowClues.css';

interface RowCluesProps {
  rowClues: number[][];
}

const RowClues: React.FC<RowCluesProps> = ({ rowClues }) => {
  return (
    <div className="row-clues">
      {rowClues.map((clue, rowIndex) => (
        <div key={rowIndex} className="row-clue">
          {clue.join(' ')}
        </div>
      ))}
    </div>
  );
};

export default RowClues;