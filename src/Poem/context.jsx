import React, { createContext, useState } from "react";

const defaultValues = {
  rhymeScheme: "",
  letters: [],
  stanzas: [],
  changeRhymeScheme: () => { }
}
export const PoemContext = createContext(defaultValues);

export const PoemContextProvider = (props) => {
  const [rhymeScheme, setRhymeScheme] = useState("");
  const letters = rhymeScheme
    .split("")
    .filter((v, i, a) => a.indexOf(v) === i && v !== " " && v !== "X");
  const stanzas = (rhymeScheme !== "") ?
    rhymeScheme.split(" ")
    : [];

  const changeRhymeScheme = (scheme) => {
    scheme = scheme.toUpperCase().trim();
    setRhymeScheme(scheme);
  };

  return (
    <PoemContext.Provider value={{ rhymeScheme, changeRhymeScheme, letters, stanzas }}>
      {props.children}
    </PoemContext.Provider>
  );
};
