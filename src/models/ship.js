// ShipFactory takes one argument, maxHP
// maxHP determines the length of the ship
// hp is set to equal maxHP and once a ship is hit()
// 1 is subtracted from the hp of the ship

const Ship = (length) => {
  const id = Math.random().toString(36).substr(2, 9);
  let hp = length;
  const isSunk = () => hp <= 0;
  const hit = () => { hp -= 1; };

  return {
    id, length, hit, isSunk,
  };
};

export default Ship;
