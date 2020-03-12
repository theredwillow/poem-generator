import React, { useContext } from "react";
import {PoemContext} from "./context";
import Scheme from "./Scheme";
import Stanza from "./Stanza";
import Research from "./Research";
import "./index.css";

const Poem = () => {
  const {stanzas} = useContext(PoemContext);
  const stanzaDisplays = (stanzas.length) ?
    stanzas.map((stanza, i) =>
      <Stanza
        key={`stanza-${i}-${stanza}`}
        stanza={stanza}
        i={i}
      />
    )
    : [];

  return (
    <>
      <Scheme />
      {stanzaDisplays}
      <Research />
    </>
  );
};

export default Poem;
