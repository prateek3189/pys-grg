import "./Square.css";

function Square({ value, onSquareClick }) {
  return (
    <div className="board-cell" onClick={onSquareClick}>
      {value}
    </div>
  );
}

export default Square;
