import React, { useContext, useState } from "react";
import { PoemContext } from "../context";
import { PoemGenerator } from "./PoemGenerator";

import "./index.css";

const SchemeSelector = () => {
  const {rhymeScheme, changeRhymeScheme} = useContext(PoemContext);
  const [newRhymeScheme, setNewRhymeScheme] = useState(rhymeScheme);
  const [editMode, setEditMode] = useState(true);
  const [warning, setWarning] = useState(false);

  const setScheme = () => {
    changeRhymeScheme(newRhymeScheme);
    setEditMode(false);
  };
  
  const enterEditMode = () => {
    const isSure = window.confirm("Are you sure you want to edit the rhyme scheme? You could lose some of your work.");
    if (isSure) {
      setEditMode(true);
    }
  }

  const isCompatibleLetter = (key, scheme) => {
    key = key.toUpperCase();
    const currentLetters = [...new Set(scheme.toUpperCase().split(''))].sort().filter((l) => (l !== " " && l !== "X"));
    const lastLetter = currentLetters[currentLetters.length - 1];
    let nextLetter = (lastLetter !== undefined) ? String.fromCharCode(lastLetter.charCodeAt(0) + 1) : "A";
    if (nextLetter === "X") {
      nextLetter = "Y";
    }
    return [...currentLetters, nextLetter, "X"].includes(key);
  };

  const handleKeyDown = (e) => {
    // FIXME Arrow controls
    // FIXME Deletions and insertions
    if (e.key === " " || e.key === "Tab" || e.key === "Backspace") {
      return;
    }
    else if (e.key === "Enter") {
      setScheme();
    }
    else if (!isCompatibleLetter(e.key, newRhymeScheme)) {
      e.preventDefault();
      setWarning(true);
    }
    else {
      setWarning(false);
    }
  };

  const editDisplay = (
    <>
      <label>
        Rhyme Scheme:&nbsp;
        <input
          id="rhyme-scheme"
          type="text"
          name="name"
          value={newRhymeScheme}
          onChange={(e) => setNewRhymeScheme(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
        />&nbsp;
        <button onClick={e => setScheme()}>
          Set Rhyme Scheme
        </button>
      </label><br/>
      <div id="scheme-warning" hidden={!warning}>
        ^^^ Remember: Rhyme schemes should follow the alphabet, except for the no-rhyme "X"
      </div>
      <br/>
      <PoemGenerator scheme={newRhymeScheme} />
    </>
  );
  
  const viewDisplay = (
    <div>
      Rhyme Scheme: {rhymeScheme}&nbsp;
      <button onClick={() => enterEditMode()}>
        Edit
      </button>
    </div>
  );

  return (editMode) ? editDisplay : viewDisplay;
}

export default SchemeSelector;
