function newGame(p1board, p2board) {
  const game = {};
  game.p1 = p1board;
  game.p2 = p2board;
  game.turn = "p1";
  game.decided = false;
  game.phase = "init";

  game.checkDecided = function () {
    if (this.phase === "playing") {
      if (this.p1.checkLoss()) {
        this.decided = "p2";
        return true;
      }
      if (this.p2.checkLoss()) {
        this.decided = "p1";
        return true;
      }
    }
    return false;
  };

  game.finishTurn = function () {
    if (this.turn === "p1") {
      this.turn = "p2";
    } else if (this.turn === "p2") {
      this.turn = "p1";
      this.phase = "playing";
    }
    this.checkDecided();
  };
}

export default newGame;
