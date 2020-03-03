import { createContext } from "react";

const defaultContext = {
    rhymeScheme: "",
    letters: []
};

const PoemContext = createContext([defaultContext, () => {}]);

export default PoemContext;
