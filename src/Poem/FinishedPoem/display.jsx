import React from "react";
import "./index.css";

const PoemDisplay = ({title="Untitled", author="Unknown", poem}) => {
  if (!poem || !poem.length) {
    return (
      <div>
        ERROR! No poem was passed to the PoemDisplay component.
      </div>
    )
  }

  return (
    <div id="poem-display">
      <div id="poem-header">
        <span id="poem-title">{title}</span> by <span id="poem-author">{author}</span>
      </div>
      {
        poem.map((stanza, i) =>
          <div
            key={`${title}-stanza-${i}`}
            className="poem-stanza"
          >
            {
              stanza.map((line, j) =>
                <div
                  key={`${title}-stanza-${i}-line-${j}`}
                  className="poem-line"
                >
                  {line}
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
};

export default PoemDisplay;
