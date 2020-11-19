import React, { useContext } from "react";
import {PoemContext} from "./context";
import SchemeSelector from "./SchemeSelector";
import MainDisplay from "./MainDisplay";
// import FinishedPoem from "./FinishedPoem";
import "./index.css";

const Poem = () => {
  const {rhymeScheme} = useContext(PoemContext);

  return (
    <div id="poem">
      { !rhymeScheme && <SchemeSelector /> }
      { rhymeScheme && <MainDisplay /> }
      {/* && <FinishedPoem /> */}
    </div>
  );
};

export default Poem;
