import React, { useState } from 'react';
import './App.css';
import mockDb from './mockDb.json';
import DataList from './components/DataList.js';
import ScratchBar from './components/ScratchBar.js';

function App() {
  // State for input form
  const [queryScratch, setQueryScratch] = useState('');


  // Handle Scratch form input
  const handleInputScratch = e => {
    setQueryScratch(e.target.value);
  };

  // Handle Scratch submit
  const handleSubmitScratch = async e => {
    e.preventDefault();
    // Do stuff
  };

  // Handle Scratch form selection
  const handleOnClickScratch = industry => {
    setQueryScratch(industry);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-bar">
          <DataList db={mockDb} />
        </div>
        <div className="App-bar">
          <ScratchBar
            value={queryScratch}
            onSubmit={handleSubmitScratch}
            onInput={handleInputScratch}
            onClick={handleOnClickScratch}
            db={mockDb}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
