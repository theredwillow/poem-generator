import React, { useState } from "react";
import PoemContext from "./context";
import Stanza from "./Stanza";
import "./index.css";

const Poem = () => {

  const [rhymeScheme, setRhymeScheme] = useState("");
  const letters = rhymeScheme
    .split("")
    .filter((v, i, a) => a.indexOf(v) === i && v !== " " && v !== "X");
  const stanzas = rhymeScheme.split(" ");

  const stanzaDisplays = stanzas.map((stanza, i) => <Stanza stanza={stanza} i={i} />);

  return (
    <PoemContext.Provider value={{ rhymeScheme, letters }}>
      <label>
        Rhyme Scheme:&nbsp;
        <input
          type="text"
          name="name"
          onChange={e => setRhymeScheme(e.target.value.toUpperCase())}
        />
      </label>
      {stanzaDisplays}
    </PoemContext.Provider>
  );
};

export default Poem;
