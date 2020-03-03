import React, { useState } from "react";
import "./index.css";
import Stanza from "./Stanza";

const Poem = () => {
  const [rhymeScheme, setRhymeScheme] = useState("");

  const letters = rhymeScheme
    .split("")
    .filter((v, i, a) => a.indexOf(v) === i && v !== " " && v !== "X");

  const stanzas = rhymeScheme.split(" ");
  // FIXME Don't send letters like that, set up context
  const stanzaDisplays = stanzas.map((stanza, i) => (
    <Stanza stanza={stanza} i={i} letters={letters} />
  ));

  return (
    <div>
      <label>
        Rhyme Scheme:&nbsp;
        <input
          type="text"
          name="name"
          onChange={e => setRhymeScheme(e.target.value.toUpperCase())}
        />
      </label>
      {stanzaDisplays}
    </div>
  );
};

export default Poem;
