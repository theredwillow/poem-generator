import React, { useContext } from "react";
import { PoemContext } from "../../context";

const Line = ({ letter }) => {
  const {letters} = useContext(PoemContext);
  const letterNumber = letters.indexOf(letter) + 1 || "x";

  return (
    <div className={`line letter-${letterNumber}`}>
      {/* FIXME This needs to be handled by context */}
      <input type="text" />
      <div className="line-letter">{letter}</div>
    </div>
  );
};

export default Line;
