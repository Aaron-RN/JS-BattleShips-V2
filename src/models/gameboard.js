import '../css/main.css';
import ship from './ship';

const gameBoard = (elemID) => {
  const cells = [];

  const init = (() => {
    for (let i = 0; i < 100; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      elemID.appendChild(cell);
      cells.push(cell);
    }
  })();

  return { init };
};

export default gameBoard;