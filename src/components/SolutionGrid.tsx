import React, { useState } from 'react';
import { NonoGramSolution } from '../models/NonogramSolution';
import { generateNonogramPuzzle } from '../utils/nonogramSolutionGenerator';
import { isVisible } from '@testing-library/user-event/dist/utils';


interface SolutionGridProps {
  template: number[][];
}

const SolutionGrid: React.FC<SolutionGridProps> = ({ template}) => {
  const rows = template.length;
  const columns = template[0].length;
  const [clickedButtons, setClickedButtons] = useState(new Set<string>());
  const [userInput, setUserInput] = useState<number[][]>(
    Array.from({ length: rows }, () => Array(columns).fill(0))
  );


  const [showPopup, setShowPopup] = useState(false);

  const solutionFound = (inputArray: number[][]) => {
    if (JSON.stringify(inputArray) === JSON.stringify(template)) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {
       <div >
        <br></br>
          {template.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor:
                      template[rowIndex][colIndex] == 1
                        ? 'black'
                        : 'white',
                    cursor: 'pointer',
                  }}
                ></button>
              ))}
            </div>
          ))}
        </div> }
    </div>
  );
};

export default SolutionGrid;