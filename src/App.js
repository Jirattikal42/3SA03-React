import React from 'react';
import './App.css';
import WordCard from './WordCard';


var word = ""; 


var rand = Math.floor(Math.random() * 4);
switch (rand) {
  case 0:  
    word = "table";
    break;
  case 1: 
    word = "chair";
    break;
  case 2:  
    word = "glass";
    break;
  case 3:      
    word = "paper";
    break;
}

function App() {
  return (
    <div>
      {
        <WordCard value={word}/>
      }
    </div>
  );
}

export default App;
