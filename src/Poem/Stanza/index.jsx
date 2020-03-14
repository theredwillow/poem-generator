import React from "react";
import Line from "./Line";

const Stanza = ({ stanza, i }) => {
  const lines = stanza.split("");
  const lineDisplays = lines.map((letter, i) => <Line key={`line-${i}`} letter={letter} />);
  return (
    <div className="stanza">
      Stanza {i + 1}<br/>
      <div className="line-container">
        {lineDisplays}
      </div>
      <textarea className="stanza-notes" rows={lines.length} />
    </div>
  );
};

export default Stanza;
