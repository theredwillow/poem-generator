import React, { useContext, useState } from "react";
import { PoemContext } from "../context";
import { PoemGenerator } from "./PoemGenerator";
import createRhymeScheme from '../../utils/createRhymeScheme';

import "./index.css";

const SchemeSelector = () => {
  const {rhymeScheme, changeRhymeScheme} = useContext(PoemContext);
  const [typed, setTyped] = useState(rhymeScheme);
  const [editMode, setEditMode] = useState(true);

  const validRhymeScheme = createRhymeScheme(typed);

  const handleClick = () => {
    changeRhymeScheme(validRhymeScheme);
    setTyped(validRhymeScheme);
    setEditMode(false);
  };
  
  const enterEditMode = () => {
    const isSure = window.confirm("Are you sure you want to edit the rhyme scheme? You could lose some of your work.");
    if (isSure) {
      setEditMode(true);
    }
  }

  const editDisplay = (
    <>
      <label>
        Rhyme Scheme:&nbsp;
        <input
          id="rhyme-scheme"
          type="text"
          name="name"
          value={typed}
          onChange={(e) => setTyped(e.target.value.toUpperCase())}
        />&nbsp;
        <button onClick={handleClick}>
          Set Rhyme Scheme
        </button>
      </label><br/>
      <div id="scheme-warning" hidden={(typed === validRhymeScheme)}>
        ^^^ This rhyme scheme is invalid, it will be converted to <b>"{validRhymeScheme}"</b>
      </div>
      <br/>
      <PoemGenerator scheme={validRhymeScheme} />
    </>
  );
  
  const viewDisplay = (
    <div>
      Rhyme Scheme: {validRhymeScheme}&nbsp;
      <button onClick={() => enterEditMode()}>
        Edit
      </button>
    </div>
  );

  return (editMode) ? editDisplay : viewDisplay;
}

export default SchemeSelector;
