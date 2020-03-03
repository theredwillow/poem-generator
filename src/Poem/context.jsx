import { createContext } from "react";

const defaultContext = {
    rhymeScheme: "",
    letters: [],
    stanzas: []
};

const PoemContext = createContext([defaultContext, () => {}]);

export default PoemContext;
