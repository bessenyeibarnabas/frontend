import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(undefined);

  function handleClick() {
    const trimmedName = playerName.current.value.trim();
    if (trimmedName !== "") {
      setEnteredPlayerName(trimmedName);
    }
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input id="playername" ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

//useRef vs useState beli külömbségek
//átadások átnézése
//