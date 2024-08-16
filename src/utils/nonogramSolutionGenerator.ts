function generateNonogramSolution(rows : number, cols: number) {
  const solution: number[][] = [];
  const rowClues: number[][] = [];
  const colClues: number[][] = [];

  for (let i = 0; i < rows; i++) {
    const row: number[] = [];
    for (let j = 0; j < cols; j++) {
      let block = Math.random() < 0.5 ? 0 : 1;
      row.push(block);
    }
    solution.push(row);
  }
  return solution;
}

function generateColClues(solution: number[][]) {
  const colClues: number[][] = [];
  for (let j = 0; j < solution[0].length; j++) {
    const clues: number[] = [];
    let count = 0;
    for (let i = 0; i < solution.length; i++) {
      if (solution[i][j] === 1) {
        count++;
      } else if (count > 0) {
        clues.push(count);
        count = 0;
      }
    }
    if (count > 0) {
      clues.push(count);
    }
    colClues.push(clues);
  }

  return  colClues ;
}

function generateRowClues(solution: number[][]) {
  const rowClues: number[][] = [];

  // Generate column clues
  for (let i = 0; i < solution.length; i++) {
    const clues: number[] = [];
    let count = 0;
    for (let j = 0; j < solution[0].length; j++) {
      if (solution[i][j] === 1) {
        count++;
      } else if (count > 0) {
        clues.push(count);
        count = 0;
      }
    }
    if (count > 0) {
      clues.push(count);
    }
    rowClues.push(clues);
  }

  return  rowClues ;
}

function generateNonogramPuzzle(rows: number, cols: number) {
  const solution = generateNonogramSolution(rows, cols);
  const colClues = generateColClues(solution);
  const rowClues = generateRowClues(solution);
  return { solution, rowClues, colClues };
}

export {
  generateNonogramPuzzle,
};