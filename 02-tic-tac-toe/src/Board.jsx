import "./Board.css";
import Square from "./Square";
import { useState } from "react";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  function handleClick(i) {
    if (state[i] || calculateWinner(state)) {
      if (calculateWinner(state)) {
        setWinner(calculateWinner(state));
      }
      return;
    }
    const nextSquares = state.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setState(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="board">
        <div className="board-row">
          <Square value={state[0]} onSquareClick={() => handleClick(0)} />
          <Square value={state[1]} onSquareClick={() => handleClick(1)} />
          <Square value={state[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={state[3]} onSquareClick={() => handleClick(3)} />
          <Square value={state[4]} onSquareClick={() => handleClick(4)} />
          <Square value={state[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={state[6]} onSquareClick={() => handleClick(6)} />
          <Square value={state[7]} onSquareClick={() => handleClick(7)} />
          <Square value={state[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      {winner && (
        <div>
          <p>Winner: {winner}</p>
          <button
            onClick={() => {
              setWinner(null);
              setState(Array(9).fill(null));
              setXIsNext(true);
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </>
  );
}

export default Board;
