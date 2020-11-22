import React, { useState } from "react";
import { fetchData } from "../../api";
import { dictionaryTypes } from "../../../config";
import "./index.css";

const SECTION_NAMES = Object.keys(dictionaryTypes);

const Research = () => {
  const [mode, setMode] = useState('Rhyming Words');
  const [searchWord, setSearchWord] = useState();
  const [searchResults, setSearchResults] = useState();
  const [wordCollection, setWordCollection] = useState([]);
  const [input, setInput] = useState('');

  const addWord = (word) => {
    if (!wordCollection.includes(word)) {
      setWordCollection([...wordCollection, word].sort())
    }
  }

  return (
    <div id="research">

      {
        searchWord &&
          <div className="data-display">
            <div className="tabs">
              {
                SECTION_NAMES.map(sectionName => (
                  <button
                    key={`tab-${sectionName}`}
                    className="tab"
                    disabled={(mode === sectionName)}
                    onClick={async () => {
                      setMode(sectionName);
                      setSearchResults("LOADING...");
                      const data = await fetchData(sectionName, searchWord);
                      setSearchResults(data.map(result => result.word));
                    }}
                  >
                    {sectionName}
                  </button>
                ))
              }
              <div className="provided-by">
                Data provided by <a href="https://www.datamuse.com/">Datamuse</a>
              </div>
            </div>

            <div className='data'>
              {
                Array.isArray(searchResults)
                  ? searchResults.length
                      ? searchResults.map(word => (
                        <button
                          key={`word-${word}`}
                          className='word'
                          onClick={() =>
                            addWord(word)
                          }
                          disabled={wordCollection.includes(word)}
                        >
                          {word}
                        </button>
                      ))
                      : <>None found.</>
                  : /^ERROR/.test(searchResults)
                    ? <>
                        <span id="api-error">
                          Sorry, there was an error. Try again?
                        </span>
                        <button onClick={() =>
                          fetchData(mode, searchWord)
                        }>
                          Get {mode}
                        </button>
                      </>
                    : <>{searchResults}</>
              }
            </div>
        </div>
      }
      
      <div
        className="words-display"
        onClick={() =>
          setSearchWord()
        }
      >
        {
          wordCollection.map(word => (
            <button
              key={`word-collection-${word}`}
              className={`word ${((word === searchWord) ? 'active' : 'inactive')}`}
              onClick={async (e) => {
                e.stopPropagation(); 
                if (word === searchWord) {
                  setSearchWord();
                }
                else {
                  setSearchWord(word);
                  setSearchResults("LOADING...");
                  const data = await fetchData(mode, word);
                  setSearchResults(data.map(result => result.word));
                }
              }}
            >
              {word}
            </button>
          ))
        }
      </div>

      <input
        type="text"
        name="research-word"
        value={input}
        onChange={(e) =>
          setInput(e.target.value.toLowerCase())
        }
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addWord(input);
            setInput('');
          }
        } }
      />&nbsp;
      <button
        onClick={() => {
          addWord(input);
          setInput('');
        }}
      >
        Add word
      </button>

    </div>
  );
};

export default Research;
