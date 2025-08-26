//criação do elemento square que ira compor o tabuleiro
import "./App.css";
import { useState } from "react";

function Square() {
  const [valor, setvalor] = useState(null);

  function handleClick() {
    setvalor('X');
  }
  return (
    <button className="square" onClick={handleClick}>
      {valor}
    </button>
  );
}

export default function Tabuleiro() {
  return (
    <div>
      <Square  />
      <Square />
      <Square  />

      <div>
        <Square  />
        <Square  />
        <Square  />
      </div>

      <div></div>
      <Square  />
      <Square  />
      <Square  />
    </div>
  );
}
