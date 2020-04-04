import React, { useState } from "react";
import Line from "./Line";
import "./index.css";

const Stanza = ({ stanza, i }) => {

  const [mode, setMode] = useState('lines');

  const lines = stanza.split("");
  const lineDisplays = lines.map((letter, i) => <Line key={`line-${i}`} letter={letter} />);
  return (
    <div className="stanza" data-mode={mode}>
      <div className="header">
        <span className="number">Stanza {i + 1}</span>
        
        <div className="tabs">
          <button
            className="lines"
            onClick={() => setMode("lines")}
            disabled={(mode === "lines")}
          >
            Lines
          </button>
          
          <button
            className="notes"
            onClick={() => setMode("notes")}
            disabled={(mode === "notes")}
          >
            Notes
          </button>
        </div>
      </div>
      
      <div className="display lines">
        {lineDisplays}
      </div>
      
      <div className="display notes">
        <textarea rows={lines.length * 2} />
      </div>
    </div>
  );
};

export default Stanza;
