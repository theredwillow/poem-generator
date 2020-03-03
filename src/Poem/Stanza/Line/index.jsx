import React, { useContext } from "react";
import PoemContext from "../../context";

const Line = ({ line }) => {
  const letters = useContext(PoemContext).letters;
  const letterNumber = letters.indexOf(line) + 1 || "x";
  return(
    <div key={line} className={`line letter-${letterNumber}`}>
      <input type="text" />
      <div className="line-letter">{line}</div>
    </div>
  );
};

export default Line;
