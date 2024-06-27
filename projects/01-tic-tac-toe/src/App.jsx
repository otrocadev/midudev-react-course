import "./App.css";
import { useState } from "react";
import confetti from "canvas-confetti";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    if (boardToCheck[0]) {
      if (
        boardToCheck[0] === boardToCheck[1] &&
        boardToCheck[0] === boardToCheck[2]
      )
        return boardToCheck[0];
      if (
        boardToCheck[0] === boardToCheck[4] &&
        boardToCheck[0] === boardToCheck[8]
      )
        return boardToCheck[0];
      if (
        boardToCheck[0] === boardToCheck[3] &&
        boardToCheck[0] === boardToCheck[6]
      )
        return boardToCheck[0];
    }
    if (boardToCheck[1]) {
      if (
        boardToCheck[1] === boardToCheck[4] &&
        boardToCheck[1] === boardToCheck[7]
      )
        return boardToCheck[1];
    }
    if (boardToCheck[2]) {
      if (
        boardToCheck[2] === boardToCheck[4] &&
        boardToCheck[2] === boardToCheck[6]
      )
        return boardToCheck[2];
      if (
        boardToCheck[2] === boardToCheck[5] &&
        boardToCheck[2] === boardToCheck[8]
      )
        return boardToCheck[2];
    }
    if (boardToCheck[3]) {
      if (
        boardToCheck[3] === boardToCheck[4] &&
        boardToCheck[3] === boardToCheck[5]
      )
        return boardToCheck[3];
    }
    if (boardToCheck[6]) {
      if (
        boardToCheck[6] === boardToCheck[7] &&
        boardToCheck[6] === boardToCheck[8]
      )
        return boardToCheck[6];
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "Draw" : "Winer is:"}</h2>

            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>Start again</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
