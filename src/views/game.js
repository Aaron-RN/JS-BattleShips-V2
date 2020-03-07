import Game from '../models/game';
import cannonUp from '../images/ship.png';
import cannonDown from '../images/cannonDown.png';
import playSound from '../audio/audio';

class GameView {
  constructor(size = 10) {
    this.size = size;
    this.game = new Game('You', 'Enemy', size);
    this.game.player1.targetBoard.placeAllShips();
    this.game.player2.targetBoard.placeAllShips();
    this.playerBoardNode = document.getElementById('PlayerBoard');
    this.enemyBoardNode = document.getElementById('EnemyBoard');
    this.whosTurn = 'Player';
    this.page = document.querySelector('body');
    this.modal = document.querySelector('.aa-modal');
    this.modalContent = document.querySelector(".aa-modal-content");
    this.turnsTaken = 0;
    this.enemyMoves = [...Array(this.size ** 2).keys()];
    this.initHeader();
  }

  run() {
    GameView.renderBoard(this.playerBoardNode, this.game.player2.targetBoard.board);
    GameView.renderBoard(this.enemyBoardNode, this.game.player1.targetBoard.board, true);

    this.enemyBoardNode.childNodes.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!this.game.over) {
          const playerResult = this.playerPlay(cell);
          if (playerResult === 'missed') {
            let enemyResult = null;
            do {
              enemyResult = this.enemyPlay();
            } while (enemyResult === 'hit' && !this.game.over);
          }

          if (this.game.over) {
            if (this.game.winner.name === 'You') this.gameOver('Congratulations, you win!');
            else {
              this.gameOver('Uh oh, the Enemy wins!');
            }
          }
        }
      });
    });
  }
  SwitchTurns(){
    let {modal, modalContent, whosTurn, turnsTaken} = this;
    if(whosTurn=="Enemy"){
      turnsTaken++
      //EnemyCannon.style.display="none";
      whosTurn="Player";
      //PlayerCannon.style.display="block";
      modal.classList.remove("fade","fade-5");
      modal.classList.add("fade");
      modal.style.display="block";
      modalContent.innerHTML="<p class='glowText'>Round:"+turnsTaken+"</p><p class='glowText'>Player's Turn<p>"
      //snd_gui_open.play();
      setTimeout(() => this.CloseModal(), 2000);
    }else{
      //PlayerCannon.style.display="none";
      whosTurn="Enemy";
      //EnemyCannon.style.display="block";
      modal.classList.remove("fade","fade-5");
      modal.classList.add("fade");
      modal.style.display="block";
      modalContent.innerHTML="<p class='glowText'>Round:"+turnsTaken+"</p><p class='glowText'>Enemy's Turn<p>"
      //snd_gui_open.play();
      setTimeout(() => this.CloseModal(), 2000);
    }
  }
  
  CloseModal(Switch){
    if(!this.game.over){
      let {modal, modalContent, whosTurn} = this;
      modal.style.display="none";
      modalContent.innerHTML=`<img id='playerCannon' src='${cannonUp}'><img id='enemyCannon' src='${cannonDown}'>`;
//      window.PlayerCannon = document.getElementById("playerCannon");
//      window.EnemyCannon = document.getElementById("enemyCannon");
//      if(!Switch && whosTurn==="Enemy"){AI();}
      if(Switch){this.SwitchTurns();}
    }
  }
  
  playerPlay(cell) {
    const result = this.game.play(cell.dataset);
    if (result) { 
      let {modal, page, modalContent, whosTurn} = this;
      //playSound('fire');
      modal.classList.remove("fade");
      modal.classList.add("fade-5");
      modal.style.display="block";
      modalContent.innerHTML=`<img id='playerCannon' src='${cannonUp}'><img id='enemyCannon' src='${cannonDown}'><div class='cannonMissile missileFalling'></div>`;
      var missile = document.querySelector(".cannonMissile");
      if(whosTurn==="Player")
      {
          const PlayerCannon = document.getElementById("playerCannon");
          PlayerCannon.style.display="block";
          PlayerCannon.classList.add("cannon");
      }
      if(whosTurn==="Enemy")
      {
          const EnemyCannon = document.getElementById("enemyCannon");
          EnemyCannon.style.display="block";
          EnemyCannon.classList.add("cannon");
      }
      setTimeout(() => this.CloseModal(true), 5000);
      //This occurs in line with the firing animation of the cannon
      setTimeout(function(){
//          if(rand==1){snd_fire.play();}
//          if(rand==2){snd_fire2.play();}
//          if(rand==3){snd_fire3.play();}
          page.classList.add("shake");
          modal.classList.add("flash");
      },500);
      //Displays the falling missile animation
      setTimeout(function(){
          missile.style.display="block";
      },1500);
      
      setTimeout(function(){
        cell.classList.add(result); 
      },3000);
    }

    return result;
  }

  enemyPlay() {
    const move = this.enemyMoves.splice(Math.floor(Math.random() * this.enemyMoves.length), 1)[0];
    const coords = { x: Math.floor(move / this.size), y: move % this.size };
    const result = this.game.play(coords);
    const cell = this.playerBoardNode
      .querySelector(`[data-x="${coords.x}"][data-y="${coords.y}"]`);
    cell.classList.add(result);

    return result;
  }

  static renderBoard(boardNode, board, enemy = false) {
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        const cellNode = document.createElement('div');
        cellNode.classList.add('cell');
        cellNode.setAttribute('data-x', i);
        cellNode.setAttribute('data-y', j);
        cellNode.textContent=i+j;
        if (!enemy && board[i][j].shipId) {
          cellNode.classList.add('ship');
        }
        boardNode.appendChild(cellNode);
      });
    });
  }

  initHeader() {
    const headerNode = document.getElementById('header');
    this.messageContainer = document.createElement('div');
    this.messageContainer.classList.toggle('hidden');
    this.message = document.createElement('p');
    const button = document.createElement('button');
    button.innerHTML = 'Play again?';
    button.addEventListener('click', () => { window.location.reload(); });
    this.messageContainer.appendChild(this.message);
    this.messageContainer.appendChild(button);

    headerNode.appendChild(this.messageContainer);
  }

  gameOver(message) {
    this.message.innerHTML = message;
    this.messageContainer.classList.toggle('hidden');
  }
}

export default GameView;
