import React, { useContext, useState } from "react";
import { ApiContext } from "../api";
import "./index.css";

const Research = () => {

  const [input, setInput] = useState('');
  const [searchWord, setSearchWord] = useState();
  const {data, addWord, getRelatedWords, getRhymingWords, getSynonyms, getAntonyms} = useContext(ApiContext);

  const results = data[searchWord];
  // TODO Add support for Definitions
  const sections = [
    // { title: 'Definitions', func: getDefinitions },
    { title: 'Related Words', func: getRelatedWords },
    { title: 'Rhyming Words', func: getRhymingWords },
    { title: 'Synonyms', func: getSynonyms },
    { title: 'Antonyms', func: getAntonyms },
  ];

  const buildSection = (title, func) => {
    const titleLower = title.toLowerCase().replace(/ /g, '-');
    if (!results) { return; }

    let contents;
    if (results[titleLower] === undefined) {
      contents = <button onClick={() => func(searchWord)}>Get {title}</button>;
    }
    else if (results[titleLower] === 'LOADING') {
      contents = 'Loading...';
    }
    else if (results[titleLower] === 'ERROR') {
      contents = (
        <>
          Sorry, there was an error. Try again?<br/>
          <button onClick={() => func(searchWord)}>Get {title}</button>
        </>
      );
    }
    else if (results[titleLower].length === 0) {
      contents = 'None found.';
    }
    else {
      contents = results[titleLower].map(w => (
        <button
          key={w}
          className='word'
          onClick={() => addWord(w)}
          disabled={data[w]}
          >
            {w}
        </button>
      ) );
    }

    return (
      <div className={`data ${titleLower}`}>
        <div className="title">{title}</div>
        {contents}<br/>
      </div>
    );
  };

  const dataToDisplay = sections.map(({title, func}) => buildSection(title, func));

  const submitNewWord = () => { addWord(input.toLowerCase()); setInput(''); };

  const wordsToDisplay = Object.keys(data).sort().map(w => (
    <button
      key={w}
      className={`word ${((w === searchWord) ? 'active' : 'inactive')}`}
      onClick={() => setSearchWord((w === searchWord) ? '' : w)}
    >
      {w}
    </button>
  ));

  return (
    <div id="research" className={results ? 'expanded' : ''}>
      
      <div className="data-display">
        <div className="data definitions">
          {dataToDisplay}
        </div>
        <div className="provided-by">
          Data provided by <a href="https://www.datamuse.com/">Datamuse</a>
        </div>
      </div>
      
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

      <div className="words-display">
        {wordsToDisplay}
      </div>

    </div>
  );
};

export default Research;
