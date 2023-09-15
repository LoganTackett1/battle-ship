import Vector from "./vectors";

function newShip(length) {
  const ship = {
    hits: 0,
    length,
    dead: false,
  };
  ship.hit = function () {
    this.hits += 1;
    if (this.hits === this.length) {
      this.dead = true;
    }
  };
  return ship;
}

function dirVect(dir) {
  if (dir === "right") {
    return new Vector(0, 1);
  }
  if (dir === "left") {
    return new Vector(0, -1);
  }
  if (dir === "up") {
    return new Vector(-1, 0);
  }
  if (dir === "down") {
    return new Vector(1, 0);
  }
  throw Error("Invalid direction in dirVect");
}

export function newBoard() {
  const board = {};

  board.ships = [];
  board.area = [];
  for (let i = 0; i < 10; i += 1) {
    board.area.push([]);
  }
  board.area.forEach((row) => {
    for (let i = 0; i < 10; i += 1) {
      row.push({
        ship: null,
        hit: false,
      });
    }
  });

  board.checkSlots = function (row, col, length, dir) {
    const vect = dirVect(dir);
    const init = new Vector(row, col);
    for (let i = 0; i < length; i += 1) {
      if (!this.area[init.x0][init.x1]) {
        return false;
      }
      if (this.area[init.x0][init.x1].ship) {
        return false;
      }
      init.add(vect);
    }
    return true;
  };

  //    Valid dir values include "up","down","left","right"
  board.placeShip = function (row, col, length, dir) {
    if (this.checkSlots(row, col, length, dir)) {
      const ship = newShip(length);
      this.ships.push(ship);
      const vect = dirVect(dir);
      const init = new Vector(row, col);
      for (let i = 0; i < length; i += 1) {
        this.area[init.x0][init.x1].ship = ship;
        init.add(vect);
      }
      return true;
    }
    return false;
  };

  board.receiveAttack = function (row, col) {
    this.area[row][col].hit = true;
    if (this.area[row][col].ship) {
      this.area[row][col].ship.hit();
    }
  };

  return board;
}

export function dummy() {}
