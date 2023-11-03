import React, { useContext } from "react";
import PropsContext from "../PropsContext";

const ResetButton = () => {
  const props = useContext(PropsContext);
  return (
    <button
      class="inline-block font-mono rounded border border-blue-600 bg-blue-600 px-6 py-3 my-4 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-50"
      onClick={props.restart}>
      Restart
    </button>
  );
};

export default ResetButton;
