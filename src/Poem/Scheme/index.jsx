import React, { useContext, useState } from "react";
import { PoemContext } from "../context";
import { PoemGenerator } from "./PoemGenerator";

const Scheme = () => {
  const {rhymeScheme, changeRhymeScheme} = useContext(PoemContext);
  const [newRhymeScheme, setNewRhymeScheme] = useState(rhymeScheme);
  const [editable, setEditable] = useState(true);

  const setScheme = () => {
    changeRhymeScheme(newRhymeScheme);
    setEditable(false);
  };
  
  const editScheme = () => {
    const isSure = window.confirm("Are you sure you want to edit the rhyme scheme? You could lose some of your work.");
    if (isSure) {
      setEditable(true);
    }
  }

  const edit = (
    <>
      <label>
        Rhyme Scheme:&nbsp;
        <input
          type="text"
          name="name"
          value={newRhymeScheme}
          onChange={(e) => setNewRhymeScheme(e.target.value)}
          onKeyPress={(e) => { if(e.key === "Enter") setScheme(); } }
        />&nbsp;
        <button onClick={e => setScheme()}>
          Set Rhyme Scheme
        </button>
      </label><br/>
      <br/>
      <PoemGenerator scheme={newRhymeScheme} />
    </>
  );
  
  const view = (
    <div>
      Rhyme Scheme: {rhymeScheme}&nbsp;
      <button onClick={() => editScheme()}>
        Edit
      </button>
    </div>
  );

  return (editable) ? edit : view;
}

export default Scheme;
