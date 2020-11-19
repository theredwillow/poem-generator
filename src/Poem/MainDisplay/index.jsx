import React, { useContext } from "react";
import {PoemContext} from "../context";
import Stanza from "./Stanza";
import Research from "./Research";
// import "./index.css";

const MainDisplay = () => {
  const {stanzas, rhymeScheme, changeRhymeScheme} = useContext(PoemContext);

  const enterEditMode = () => {
    const isSure = window.confirm("Are you sure you want to edit the rhyme scheme? You will be undoing all of your work.");
    if (isSure) {
      changeRhymeScheme('');
    }
  }

  return (
    <>
      <div id="rhyme-scheme-display">
        Rhyme Scheme: {rhymeScheme}&nbsp;
        <button onClick={() => enterEditMode()}>
          Reset
        </button>
      </div>

      {
        stanzas.length &&
        stanzas.map((stanza, i) =>
          <Stanza
            key={`stanza-${i}-${stanza}`}
            stanza={stanza}
            i={i}
          />
        )
      }

      <Research />
    </>
  );
};

export default MainDisplay;
