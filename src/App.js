//criação do elemento square que ira compor o tabuleiro
import "./App.css";
import { useState } from "react";

function Square({ valor, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

export default function Tabuleiro() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculaVencedor(squares)){
      return
    };

    //o handle click continua a execução pois o return não foi executado
    const nextSquares = squares.slice();
    

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="container">
      <h1>Jogo da Veia</h1>
      <div>
        <Square
          valor={squares[0]}
          onSquareClick={() => {
            handleClick(0);
            
          }}
        />
        <Square
          valor={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          valor={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>

      <div>
        <Square
          valor={squares[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          valor={squares[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          valor={squares[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>

      <div>
        <Square
          valor={squares[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          valor={squares[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          valor={squares[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
}
  
function calculaVencedor(squares){
 const linhas = [
    [0, 1, 2], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6],
  ];
   for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
    return null ; 
}

