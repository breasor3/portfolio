import React, { useState } from 'react';
import AnswerGrid from './AnswerGrid';
import ColClues from './ColClues';
import RowClues from './RowClues';
import { generateNonogramPuzzle } from '../utils/nonogramSolutionGenerator';
import SolutionGrid from './SolutionGrid';
import './PuzzlePage.css';

const { solution, rowClues, colClues } = generateNonogramPuzzle(10, 10);

const PuzzlePage: React.FC = () => {

  const [toggleChecked, setToggleChecked] = useState(true);

  const handleToggleChange = () => {
    setToggleChecked(!toggleChecked);
  };

  return (
    <div className="puzzle-page">
      <div className="puzzle-grid">
        <div className="row-clues">
          <RowClues rowClues={rowClues} />
        </div>
        <div className="col-clues">
          <ColClues colClues={colClues} />
        </div>
        <div className="answer-grid">
          <AnswerGrid template={solution} colorCheck={toggleChecked} />
        </div>
        <div className="switch-container">
          <span className="switch-text">X</span>
          <label className="switch">
            <input type="checkbox" checked={toggleChecked} onChange={handleToggleChange} />
            <span className="slider round"></span>
          </label>
          <span className="switch-text"><button
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: 'black',
                      borderColor: 'white',
                      borderStyle: 'solid',
                      borderRadius: '0',
                      borderWidth: '2px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '20px',
                      color: 'white',
                    }}
                    /></span>
        </div>
         {/* <div className='solution-grid'>
          {<SolutionGrid template={solution} /> }
        </div>  */}
      </div>
    </div>
  );
};

export default PuzzlePage;