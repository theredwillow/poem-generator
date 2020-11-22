import React from "react";
import { verifyPoemScheme } from "./utils";
import "./index.css";

const PoemDisplay = ({title="Untitled", author="Unknown", poem, scheme}) => {
  if (!poem || !poem.length) {
    return (
      <div>
        ERROR! No poem was passed to the PoemDisplay component.
      </div>
    )
  }

  // TODO Create a toggle to allow users to view scheme optionally
  let hasScheme = Boolean(scheme);
  if (hasScheme) {
    const isValid = verifyPoemScheme(poem, scheme);
    if (!isValid) {
      console.log(`ERROR: ${scheme} does not work for this poem!`);
      console.log("Cannot open the rhyme scheme viewer.");
      hasScheme = false;
    } else {
      scheme = scheme.trim().split(" ");
    }
  }

  return (
    <div id="poem-display">
      <div id="poem-header">
        <span id="poem-title">{title}</span> by <span id="poem-author">{author}</span>
      </div>
      {
        poem.map((stanza, stanzaNumber) =>
          <div
            key={`${title}-stanza-${stanzaNumber}`}
            className="poem-stanza"
          >
            {
              stanza.map((line, lineNumber) =>
                <div
                  key={`${title}-stanza-${stanzaNumber}-line-${lineNumber}`}
                  className="line"
                >
                  <span className={`poem line`}>
                    {line}
                  </span>
                  {
                    hasScheme &&
                    <span className={`scheme letter letter-${scheme[stanzaNumber][lineNumber]}`}>
                      {scheme[stanzaNumber][lineNumber]}
                    </span>
                  }
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
