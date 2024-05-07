import React, { useState } from 'react';
import { NonoGramSolution } from '../models/NonogramSolution';
import { generateNonogramPuzzle } from '../utils/nonogramSolutionGenerator';
import { isVisible } from '@testing-library/user-event/dist/utils';

interface AnswerGridProps {
  template: number[][];
  colorCheck: boolean;
}

const AnswerGrid: React.FC<AnswerGridProps> = ({ template, colorCheck }) => {
  const rows = template.length;
  const columns = template[0].length;
  const [clickedButtons, setClickedButtons] = useState(new Set<string>());
  const [userInput, setUserInput] = useState<number[][]>(
    Array.from({ length: rows }, () => Array(columns).fill(0))
  );
  const [showPopup, setShowPopup] = useState(false);

  const handleGridClick = (toggleChecked: boolean, row: number, col: number) => {
    if (toggleChecked) {
      setUserInput((prevUserInput) => {
        const newUserInput = prevUserInput.map((rowArr, rowIndex) =>
          rowIndex === row
            ? rowArr.map((_, colIndex) => (colIndex === col ? (prevUserInput[row][col] === 1 ? 0 : 1) : prevUserInput[row][colIndex]))
            : rowArr
        );
        solutionFound(newUserInput);
        return newUserInput;
      });
    } else {
      setUserInput((prevUserInput) => {
        const newUserInput = prevUserInput.map((rowArr, rowIndex) =>
          rowIndex === row
            ? rowArr.map((_, colIndex) => (colIndex === col ? (prevUserInput[row][col] === 3 ? 0 : 3) : prevUserInput[row][colIndex]))
            : rowArr
        );
        solutionFound(newUserInput);
        return newUserInput;
      });
    }
  };

  const isButtonClicked = (row: number, col: number) => {
    const buttonKey = `${row}-${col}`;
    return clickedButtons.has(buttonKey);
  };

  const correctButtonClicked = (row: number, col: number) => {
    return userInput[row][col] === template[row][col];
  };

  const solutionFound = (inputArray: number[][]) => {
    const modifiedArray = inputArray.map((row) => row.map((cell) => (cell === 3 ? 0 : cell)));
    if (JSON.stringify(modifiedArray) === JSON.stringify(template)) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {
        <div style={{ display: 'flex' }}>
          <div>
            {userInput.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex' }}>
                {row.map((cell, colIndex) => (
                  <button
                    key={colIndex}
                    onClick={() => handleGridClick(colorCheck, rowIndex, colIndex)}
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: userInput[rowIndex][colIndex] === 1 ? 'black' : 'white',
                      color: userInput[rowIndex][colIndex] === 1 ? 'white' : 'black',
                      border: '2px solid black',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '24px',
                    }}
                  >
                    {userInput[rowIndex][colIndex] === 3 ? 'X' : ''}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      }
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid black',
            zIndex: 999,
          }}
        >
          <h2>Congratulations!</h2>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AnswerGrid;