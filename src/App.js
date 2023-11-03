import React, { useState } from "react";
import { ScoreBoard, Board, ResetButton } from "./component/index";
import PropsContext from "./PropsContext";
import "tailwindcss/tailwind.css";

const App = () => {
  const [xPlaying, setXPlaying] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const selectSquare = (boxIdx) => {
    //Step1 : Update the board
    const updatedBoard = squares.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    setSquares(updatedBoard);

    //Step 2: Check if either player has win the game
    const winner = calculateWinner(updatedBoard);

    if (winner) {
      console.log(`Player ${winner} wins!`);
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    } else {
      console.log("It's a draw!");
    }

    //Step 3: Change active player
    setXPlaying(!xPlaying);
  };

  const calculateWinner = (squares) => {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        setGameOver(true);
        return squares[a];
      }
    }
  };

  const restart = () => {
    setGameOver(false);
    setSquares(Array(9).fill(null));
  };

  const props = {
    scores,
    xPlaying,
    squares,
    gameOver,
    restart,
  };

  return (
    <PropsContext.Provider value={props}>
      <div className="flex flex-col items-center justify-center px-5 py-8 m-5 border border-black-100 rounded-sm shadow-2xl bg-yellow-200 sm:px-16 sm:py-20 sm:m-20">
        <ScoreBoard />
        <Board onClick={gameOver ? restart : selectSquare} />
        <ResetButton />
      </div>
    </PropsContext.Provider>
  );
};

export default App;
