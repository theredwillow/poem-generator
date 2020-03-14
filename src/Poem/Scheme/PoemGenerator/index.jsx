import React, { useState } from "react";
import {createPoem} from "./examplePoem";
import "./index.css";

export const PoemGenerator = ({scheme}) => {

  const [hover, setHover] = useState();

  if (scheme==="") {
    return <i>(Provide a rhyme scheme to see a poem here.)</i>;
  }
  scheme = scheme.trim().toUpperCase();

  const poem = createPoem(scheme);
  const stanzas = poem.reduce((acc, line, i) => {
    const newStanza = (i===0 || line.stanza !== poem[i-1].stanza);
    if (newStanza) { return [...acc, [line]]; }
    const thisStanza = acc.pop();
    return [...acc, [...thisStanza, line]];
  }, []);

  const stanzaDisplays = stanzas.map((s, i) => {
    // TODO Add letter-number classNames 
    const lineDisplays = s.map((l,j) => (
      <div
        key={`example-line-${j}`}
        className={`example-line letter-${l.letter}`}
        onMouseOver={() => setHover(l.letter)}
        onMouseOut={() => setHover()}
      >
        {l.line}
      </div>
    ));
    return (
      <div key={i} className="example-stanza">
        <div className="title">Stanza {i}</div>
        {lineDisplays}
      </div>
    );
  });
  const responsiveScheme = scheme.split('').map((letter) => {
    if (letter === " ") { return ' '; }
    return (
      <span
        key={letter}
        className={`scheme-letter letter-${letter}`}
        onMouseOver={() => setHover(letter)}
        onMouseOut={() => setHover()}
      >
        {letter}
      </span>
    );
  });
  return (
    <div id="example-poem" className={(hover) ? `hover-${hover}` : ''}>
      <b>"Poem with the {responsiveScheme} rhyme scheme"</b><br/>
      {stanzaDisplays}
    </div>
  );
};
