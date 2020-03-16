import React, { useState } from "react";
import {exampleLines} from './examples.js';
import {createPoem} from "./createPoem";
import "./index.css";

export const PoemGenerator = ({scheme}) => {

  const [hover, setHover] = useState();

  if (scheme==="") {
    return <i>(Provide a rhyme scheme to see a poem here.)</i>;
  }
  scheme = scheme.trim().toUpperCase();

  const poem = createPoem(scheme, exampleLines);
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
        <div className="title">Stanza {i + 1}</div>
        {lineDisplays}
      </div>
    );
  });
  const responsiveScheme = scheme.split('').map((letter, i) => {
    if (letter === " ") { return ' '; }
    return (
      <span
        key={`${i}-${letter}`}
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