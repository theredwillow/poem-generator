import Localbase from "localbase";
import { dictionaryTypes } from "../config";

const db = new Localbase('dictionaries');

const addDataToLocal = async (dictionaryType, word, results) =>
  await db.collection(dictionaryType).add({ word, results });

const fetchDataFromLocal = async (dictionaryType, word) =>
  await db.collection(dictionaryType).doc({ word }).get();

const fetchDataFromApi = async (dictionaryType, word) => {
  const apiCode = dictionaryTypes[dictionaryType];
  if (!apiCode) {
    return `ERROR: "${dictionaryType}" is not a recognized dictionary type.`;
  }
  return await fetch(`https://api.datamuse.com/words?${apiCode}=${word}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => `ERROR from the DataMuse API: ${err}`);
};

export const fetchData = async (dictionaryType, word) => {
  const localData = await fetchDataFromLocal(dictionaryType, word);
  if (localData) {
    return localData.results;
  }
  else {
    return await fetchDataFromApi(dictionaryType, word)
      .then(res => {
        addDataToLocal(dictionaryType, word, res);
        return res;
      })
  }
};
