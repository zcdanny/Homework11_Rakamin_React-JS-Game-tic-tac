import React, { useContext } from "react";
import Box from "./Box";
import PropsContext from "../PropsContext";

const Board = ({ onClick }) => {
  const props = useContext(PropsContext);

  return (
    <div className="grid justify-center grid-cols-3 gap-3 place-items-center">
      {props.squares.map((value, idx) => {
        return (
          <Box value={value} onClick={() => value === null && onClick(idx)} />
        );
      })}
    </div>
  );
};

export default Board;
