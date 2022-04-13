import React from "react";
export default function Main() {
  const [userDisplay, setUser] = React.useState("");
  const [computDisplay, setcomputer] = React.useState("");
  const [resultDisplay, setresult] = React.useState("");
  let userse;
  let compse;
  function display(event) {
    setUser(event.target.id);
    userse = event.target.id;

    computerdisplay();

    getresult();
  }
  function computerdisplay() {
    let no = Math.floor(Math.random() * 3);

    if (no === 0) {
      setcomputer("rock");
      compse = "rock";
    } else if (no === 1) {
      setcomputer("paper");
      compse = "paper";
    } else {
      setcomputer("scissor");
      compse = "scissor";
    }
  }
  function getresult() {
    if (compse === userse) setresult("draw");
    else if (compse === "rock" && userse === "paper") setresult("you win");
    else if (compse === "rock" && userse === "scissor") setresult("you lose");
    else if (compse === "paper" && userse === "rock") setresult("you lose");
    else if (compse === "paper" && userse === "scissor") setresult("you win");
    else if (compse === "scissor" && userse === "rock") setresult("you win");
    else if (compse === "scissor" && userse === "paper") setresult("you lose");
  }
  return (
    <>
      <h2>
        user choice: <span id="user">{userDisplay}</span>
      </h2>
      <h2>
        computer choice: <span id="computer">{computDisplay}</span>
      </h2>
      <h2>
        result: <span id="result">{resultDisplay}</span>
      </h2>
      <button onClick={display} id="rock">
        rock
      </button>
      <button onClick={display} id="paper">
        paper
      </button>
      <button onClick={display} id="scissor">
        scissor
      </button>
    </>
  );
}
