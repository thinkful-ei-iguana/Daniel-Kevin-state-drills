import React from 'react';
import './App.css';
import Tabs from './state/tabs.js'

const tabsProp = [
  {name: 'First tab',
  content: 'placeholder'},
  {name: 'Second tab',
  content: 'more placeholder'},
  {name: 'Third tab',
  content: 'even more placeholder'}
];

function App() {
  return (
    <main className='App'>
      <Tabs tabs={tabsProp} />
    </main>
  )
}

export default App;