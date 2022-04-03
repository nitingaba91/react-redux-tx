import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recorder from '../Recorder';
import Calendar from '../Calendar';

function App() {
  return (
    <div className="App">
     <Recorder />
     <Calendar />
    </div>
  );
}

export default App;
