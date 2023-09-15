import { newBoard } from "./board";

const myBoard = newBoard();
myBoard.placeShip(9, 9, 5, "left");
myBoard.receiveAttack(9, 6);
myBoard.receiveAttack(9, 7);
myBoard.receiveAttack(9, 8);
myBoard.receiveAttack(9, 9);
myBoard.receiveAttack(9, 5);

console.log(myBoard.checkLoss());
