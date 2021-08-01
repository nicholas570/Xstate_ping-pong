import React from 'react';
import './App.css';

import { PingPongProvider } from './context/PingPongProvider';
import { Game } from './Game';

function App(): JSX.Element {
  return (
    <PingPongProvider>
      <div className="App">
        <Game/>
      </div>
    </PingPongProvider>
  )
}

export default App;
