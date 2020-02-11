// ship factory takes one argument, maxHP
// maxHP determines the length of the ship
// hp is set to equal maxHP and once a ship is hit()
// 1 is subtracted from the hp of the ship
// and the position of the ship which was hit is no longer be damaged

const ship = (maxHP, pos) => {
  let destroyed = false;
  let hp = maxHP;
  const getDestroyed = () => destroyed;
  const isSunk = () => {
    if (hp <= 0) {
      destroyed = true;
    }
  };
  const hit = () => { hp -= 1; isSunk(); };

  const init = (() => {
    // generate the other ship parts which connect to this ship as a whole and reference them
    // for example is main ship has maxHP = 2 then only one other ship part is generated
    for (let i = 1; i < maxHP; i += 1) {
      // connect html cell to this ship
      // randomly place other ship part in a nearby tiled right of main ship
      // set the maxHP of each ship part to equal 1
      // add eventlistner on the tile each part is placed on linking back to this ship
      // so that when it is clicked the damage is directed back to the this ship's hit function

    }
  })();
  return {
    maxHP, pos, getDestroyed, isSunk, hit, init,
  };
};

module.exports = ship;