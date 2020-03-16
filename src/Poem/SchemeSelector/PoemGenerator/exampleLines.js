import React, { useContext } from "react";
import { ApiContext } from "../../api";

const {data, addWord, getRhymingWords} = useContext(ApiContext);

export const exampleLines = [
  `This is a sample.`,
  `This is one example.`,
  `These sentences are ample.`,
  `This ain't a pill.`,
  `It's quite a thrill.`,
  `You need this, still.`,
  `Ask my friend, Jill.`,
  `You chose a scheme.`,
  `It isn't too extreme.`,
  `I like ice cream.`,
  `Is there a theme?`,
  `Airflow, or air stream?`,
  `Walking on a beam.`,
  `Thinking of a dream.`,
  `Interupting midstream`,
  `Choose your selection...`,
  `Check the cross section!`,
  `This is perfection!`,
  `Vote this election!`,
  `...go without detection!`,
  `The Clarinet Section.`,
  `Don't miss your connection!`,
  `...my misplaced affection.`,
  `Death by Vivisection.`,
  `...imperfection.`
];

export const getLines = (sound, syllables='X') => {
    
};
