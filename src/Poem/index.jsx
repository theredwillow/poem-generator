import React, { useContext } from "react";
import {PoemContext} from "./context";
import SchemeSelector from "./SchemeSelector";
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

  const wholePoem = (
    <div>
      {JSON.stringify(stanzas)}
    </div>
  );

  return (
    <div id="poem">
      <SchemeSelector />
      {stanzaDisplays}
      {wholePoem}
      <Research />
    </div>
  );
};

export default Poem;
