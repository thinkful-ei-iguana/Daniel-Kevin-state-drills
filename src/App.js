import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';

function App() {
  return (
    <main className='App'>
      <HelloWorld />
    </main>
  )
}

export default App;