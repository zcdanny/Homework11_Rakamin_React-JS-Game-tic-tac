import React, { useContext } from "react";
import PropsContext from "../PropsContext";
import "./styles.board.css";

const ScoreBoard = () => {
  const props = useContext(PropsContext);
  const scores = props.scores;
  const xPlaying = props.xPlaying;
  const { xScore, oScore } = props.scores;

  // console.log(xScore, oScore);
  const checkWinner = (oScore, xScore) => {
    if (oScore > xScore) {
      return "O";
    } else if (xScore > oScore) {
      return "X";
    } else {
      return "Draw";
    }
  };

  const winner = checkWinner(scores.oScore, scores.xScore);

  return (
    <div className="flex flex-col items-center justify-center px-8 py-4 my-4 rounded-md shadow-xl ">
      <span className="font-mono text-md">Player ${winner} wins!</span>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${!xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
