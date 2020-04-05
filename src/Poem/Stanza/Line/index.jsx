import React from "react";

const Line = ({ letter }) => (
  <div className={`line letter-${letter}`}>
    {/* FIXME Input should be handled by context */}
    <input type="text" />
    <div className="line-letter">{letter}</div>
  </div>
);

export default Line;
