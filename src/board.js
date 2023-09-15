export function newBoard() {
  const board = {};

  board.area = [];
  for (let i = 0; i < 10; i += 1) {
    board.area.push([]);
  }
  board.area.forEach((row) => {
    for (let i = 0; i < 10; i += 1) {
      row.push({
        ship: false,
        hit: false,
      });
    }
  });

  return board;
}

export function dummy() {}
