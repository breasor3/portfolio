import React from 'react';
import './NonogramsInfo.css';
import nonogram1 from '../images/nonogram1.png';

const NonogramInfo: React.FC = () => {
  return (
    <div className="nonogram-info">
      <h2>What is a nonogram?</h2>
      <div className="image-container">
        <img src={nonogram1} alt="Nonogram Example" />
      </div>
      <p>
        A nonogram, also known as a Japanese crossword or Picross, is a logic puzzle where the player is given a blank grid and numbers along the rows and columns. The objective is to fill in the grid with black and white cells based on the numbers provided.
      </p>
      <p>
        The numbers along each row and column indicate the lengths of consecutive black cells in that particular row or column. For example, if a row has the numbers "2 3", it means there are two groups of black cells in that row: one with a length of 2 and another with a length of 3. The player must use logic and deduction to determine the correct placement of the black cells while ensuring that the numbers match the filled-in cells.
      </p>
      <p>
        Nonograms often form intricate pixel-art patterns or pictures when solved correctly. They are popular puzzles that challenge the player's logical thinking and pattern recognition skills.
      </p>
      <p>
        The rules of a nonogram are as follows:
        <ul>
          <li>Each number represents a group of consecutive black cells in the corresponding row or column.</li>
          <li>The numbers indicate the lengths of these groups in the order they appear.</li>
          <li>There must be at least one empty white cell between consecutive groups of black cells.</li>
          <li>The filled-in cells must match the numbers given for each row and column.</li>
        </ul>
      </p>
      <p>
        Solving a nonogram involves carefully analyzing the numbers, making logical deductions, and gradually filling in the cells until the entire grid is complete and the hidden picture is revealed.
      </p>
    </div>
  );
};

export default NonogramInfo;