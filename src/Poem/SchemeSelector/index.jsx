import React, { useContext, useState } from "react";
import { PoemContext } from "../context";
import { validateRhymeScheme } from './utils';
import PoemDisplay from "../FinishedPoem/display";
import {
  introPoem,
  exampleRhymeSchemes,
  exampleLines
} from "../../config";
import "./index.css";
import { createPoem } from "../FinishedPoem/utils";

const SchemeSelector = () => {
  const {changeRhymeScheme} = useContext(PoemContext);
  const [typed, setTyped] = useState('');
  const validRhymeScheme = validateRhymeScheme(typed);

  const providedRhymeScheme = exampleRhymeSchemes.find(exampleRhymeScheme =>
    exampleRhymeScheme.examplePoem.scheme === validRhymeScheme
  );
  const examplePoem = (typed === '')
    ? <PoemDisplay {...introPoem} />
    : (providedRhymeScheme)
      ? <PoemDisplay {...providedRhymeScheme.examplePoem} />
      : <PoemDisplay
          title="Nonsense"
          author="The Poem Generator"
          poem={createPoem(validRhymeScheme, exampleLines)}
          scheme={validRhymeScheme}
        />

  const inputForm = (
    <div id="input-form">
      <div>
        <div>
          Please provide a rhyme scheme for the poem you would like to create!
        </div>
        <input
          id="rhyme-scheme"
          type="text"
          name="name"
          value={typed}
          onChange={(e) =>
            setTyped(e.target.value.toUpperCase()
              .replace(/(^ +)|[^ A-Z]/g, '').replace(/ +/g, ' '))
          }
          onKeyPress={(e) => {
            if (e.key === "Enter")
              changeRhymeScheme(validRhymeScheme);
          } }
        />&nbsp;
        <button onClick={() => changeRhymeScheme(validRhymeScheme)}>Set</button>
        {
          typed.trim().replace(/ +/g, ' ') !== validRhymeScheme &&
          <div id="scheme-warning">
            This rhyme scheme is invalid, it will be converted to&nbsp;
            <span
              id="valid-rhyme-scheme"
              onClick={() => setTyped(validRhymeScheme)}
              title={`Click to replace with ${validRhymeScheme}`}
            >
              "<b>{validRhymeScheme}</b>". (Click here to replace now.)
            </span>
          </div>
        }
      </div>
      <br />
      <div>
        Here are some popular rhyme schemes. Click one to populate an example poem.
      </div>
      {/* TODO Create a modal for viewing with additional information */}
      <div id="rhyme-scheme-examples">
        {
          exampleRhymeSchemes.map(({name, examplePoem: {scheme}}) => (
            <div
              key={name}
              className={`example-scheme ${(scheme === validRhymeScheme) ? "active" : ""}`}
              onClick={() => setTyped(scheme)}
            >
              <b>{name}</b><br />
              {scheme}
            </div>
          ))
        }
        <div className="thanks">
          Special thanks to Jennifer Betts at&nbsp;
          <a
            href="https://examples.yourdictionary.com/common-rhyme-scheme-examples-in-poetry.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            YourDictionary
          </a>
          &nbsp;for providing examples.
        </div>
      </div>
    </div>
  );

  return (
    <>
      {examplePoem}
      {inputForm}
    </>
  );

}

export default SchemeSelector;
