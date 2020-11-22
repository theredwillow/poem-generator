import React from 'react';
import {PoemContextProvider} from "./Poem/context";
import Poem from './Poem';
import './App.css';


function App() {
  return (
    <PoemContextProvider>
      <div className="App">
        <Poem />
      </div>
    </PoemContextProvider>
  );
}

export default App;
