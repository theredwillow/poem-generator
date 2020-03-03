import React from "react";

import Line from "./Line";

const Stanza = ({ stanza, i, letters }) => {
  const lines = stanza.split("");
  const lineDisplays = lines.map(line => (
    <Line line={line} letterNumber={letters.indexOf(line) + 1 || "x"} />
  ));
  return (
    <div key={stanza} className="stanza">
      Stanza {i + 1}
      {lineDisplays}
    </div>
  );
};

export default Stanza;
