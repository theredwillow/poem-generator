import React, { useContext } from "react";
import {PoemContext} from "./context";
// import "./index.css";

const FinishedPoem = () => {
  const {stanzas} = useContext(PoemContext);

  return (
    <div id="poem">
      {JSON.stringify(stanzas)}
    </div>
  );
};

export default FinishedPoem;
