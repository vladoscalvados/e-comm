import React from 'react'
import './App.css';
import Video from './components/video';
import Accordions from './components/accordions';

function App() {
  return (
    <div className="container">

      <Video/>
      <div className="main-title">
        <h1>Фото на <br /> праздник</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et 
           olore magna aliqua.</h5>
      </div>
      <Accordions/>
    </div>
  );
}

export default App;
