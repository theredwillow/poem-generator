import React from 'react';
import {PoemContextProvider} from "./Poem/context";
import {ApiContextProvider} from "./Poem/api";
import Poem from './Poem';
import './App.css';


function App() {
  return (
    <PoemContextProvider>
      <ApiContextProvider>
        <div className="App">
          <Poem />
        </div>
      </ApiContextProvider>
    </PoemContextProvider>
  );
}

export default App;
