import React, { useContext, useState } from "react";
import { PoemContext } from "../context";
import PoemGenerator from "./PoemGenerator";
import { createRhymeScheme } from './utils';

import "./index.css";

const SchemeSelector = () => {
  const {changeRhymeScheme} = useContext(PoemContext);
  const [typed, setTyped] = useState('');

  const validRhymeScheme = createRhymeScheme(typed);

  return (
    <>
      Rhyme Scheme:&nbsp;
      <input
        id="rhyme-scheme"
        type="text"
        name="name"
        value={typed}
        onChange={(e) => setTyped(e.target.value.toUpperCase())}
        onKeyPress={(e) => {
          if (e.key === "Enter")
            changeRhymeScheme(validRhymeScheme);
        } }
      />&nbsp;
      <button onClick={() => changeRhymeScheme(validRhymeScheme)}>Set</button>
      {
        typed !== validRhymeScheme &&
        <div id="scheme-warning">
          ^^^ This rhyme scheme is invalid, it will be converted to <b>"{validRhymeScheme}"</b>
        </div>
      }
      <PoemGenerator scheme={validRhymeScheme} />
    </>
  );

}

export default SchemeSelector;
