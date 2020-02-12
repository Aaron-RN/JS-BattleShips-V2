import '../css/main.css';
import Event from '../models/event';

class GameBoardView {
  constructor(selector, size) {
    this.fireEvent = new Event();
    this.boardNode = document.querySelector(selector);
    this.cells = Array(size).fill(Array(size).fill()).map((row, i) => row.map((cell, j) => {
      cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.x = i;
      cell.dataset.y = j;
      cell.addEventListener('click', (e) => {
        this.fireEvent.notify({x: i, y: j});
      });

      this.boardNode.appendChild(cell);
      return cell;
    }));

    this.placeShipListener = (coords) => {
      const { startX, finishX, startY, finishY } = coords;
      for (let i = startX; i <= finishX; i++) {
        for (let j = startY; j <= finishY; j++) {
          this.cells[j][i].innerHTML = 'X';
        }
      }
    }
  }
};

export default GameBoardView;
