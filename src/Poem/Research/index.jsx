import React, { useContext, useState } from "react";
import "./index.css";
import { ApiContext } from "../api";

const Research = () => {
  const [input, setInput] = useState('');
  const [searchWord, setSearchWord] = useState();
  const {data, addWord, getRelatedWords, getRhymingWords, getSynonyms, getAntonyms} = useContext(ApiContext);
  const results = data[searchWord];

  const wordsDisplay = (
    <div className="words-display">
      {Object.keys(data).map(w => (
        <button
          key={w}
          className={((w === searchWord) ? 'active' : 'inactive')}
          onClick={() => setSearchWord((w === searchWord) ? '' : w)}
        >
          {w}
        </button>
      ))}
    </div>
  );

  const buildSection = (title, func) => {
    const titleLower = title.toLowerCase().replace(/ /g, '-');
    return (
      <div className={`data ${titleLower}`}>
        <div className="title">{title}</div>
        {(() => {
          switch(results[titleLower]) {
            case undefined:
              return <button onClick={() => func(searchWord)}>Get {title}</button>;
            case 'LOADING':
              return 'Loading...';
            case 'ERROR':
                return (
                  <>
                    Sorry, there was an error. Try again?<br/>
                    <button onClick={() => func(searchWord)}>Get {title}</button>
                  </>
                );
            default:
              return (results[titleLower].length) ? results[titleLower].join(", ") : "None found.";
          }
        })()}<br/>
      </div>
    );
  };

  let dataDisplay = '';
  if (results) {
    dataDisplay = (
      <div className="data-display">
        <div className="data definitions">
          <div className="title">Definitions</div>
          Examples<br/>
        </div>

        {buildSection('Related Words', getRelatedWords)}
        {buildSection('Rhyming Words', getRhymingWords)}
        {buildSection('Synonyms', getSynonyms)}
        {buildSection('Antonyms', getAntonyms)}

        <div className="provided-by">
          Data provided by <a href="https://www.datamuse.com/">Datamuse</a>
        </div>
      </div>
    );
  }

  const submitNewWord = () => { addWord(input); setInput(''); };
  return (
    <div className="research">
      Word Research Assistant<br/>
      <input
        type="text"
        name="research-word"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => { if(e.key === "Enter") submitNewWord(); } }
      />&nbsp;
      <button
        onClick={submitNewWord}
      >
        Add word
      </button>
      {wordsDisplay}
      {dataDisplay}
    </div>
  );
}

export default Research;
