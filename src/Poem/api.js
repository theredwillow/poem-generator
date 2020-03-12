import React, { createContext, useState } from "react";

const defaultValues = {
  data: {},
  getWord: () => null
}
export const ApiContext = createContext(defaultValues);

export const ApiContextProvider = (props) => {
  const [data, setData] = useState({});

  const fetchData = (code, usage, word) => {
    // console.log(`https://api.datamuse.com/words?${code}=${word}`);
    setData(
      {
        ...data,
        [word]: {
          ...data[word],
          [usage]: 'LOADING'
        }
      }
    )
    // FIXME Escape characters?
    fetch(`https://api.datamuse.com/words?${code}=${word}`)
      .then(res => res.json())
      .then((res) => {
        setData(
          {
            ...data,
            [word]: {
              ...data[word],
              [usage]: res.map(r => r.word)
            }
          }
        )
      })
      .catch((err) => {
        setData(
          {
            ...data,
            [word]: {
              ...data[word],
              [usage]: 'ERROR'
            }
          }
        )
        console.log(err);
      });
  };

  const addWord = (word) => setData({...data, [word]: {}});
  const getRelatedWords = (word) => fetchData('ml', 'related-words', word);
  const getRhymingWords = (word) => fetchData('rel_rhy', 'rhyming-words', word);
  const getSynonyms = (word) => fetchData('rel_syn', 'synonyms', word);
  const getAntonyms = (word) => fetchData('rel_ant', 'antonyms', word);

  return (
    <ApiContext.Provider value={{ data, addWord, getRelatedWords, getRhymingWords, getSynonyms, getAntonyms }}>
      {props.children}
    </ApiContext.Provider>
  );
};
