import React, { useState } from "react";
import Line from "./Line";

const Stanza = ({ stanza, i }) => {

  const [display, setDisplay] = useState('lines');

  const lines = stanza.split("");
  const lineDisplays = lines.map((letter, i) => <Line key={`line-${i}`} letter={letter} />);
  return (
    <div className={`stanza display-${display}`}>
      Stanza {i + 1}<br/>
      <button onClick={() => setDisplay("lines")} disabled={(display === "lines")}>Lines</button>
      <button onClick={() => setDisplay("notes")} disabled={(display === "notes")}>Notes</button><br/>
      <div className="lines">
        {lineDisplays}
      </div>
      <textarea className="notes" rows={lines.length * 2} />
    </div>
  );
};

export default Stanza;
