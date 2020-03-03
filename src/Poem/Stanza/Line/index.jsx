import React from "react";

const Line = ({ line, letterNumber }) => (
  <div key={line} className={`line letter-${letterNumber}`}>
    <input type="text" />
    <div className="line-letter">{line}</div>
  </div>
);

export default Line;
