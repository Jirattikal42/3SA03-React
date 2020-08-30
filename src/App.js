import React from 'react';
import './App.css';
import WordCard from './WordCard';


var word = ""; 
var text = "";


var rand = Math.floor(Math.random() * 4);
switch (rand) {
  case 0: 
    text = 'จงเรียงคำว่า "โต๊ะ"'
    word = "table";
    break;
  case 1: 
    text = 'จงเรียงคำว่า "เก้าอี้"'
    word = "chair";
    break;
  case 2:  
    text = 'จงเรียงคำว่า "แก้ว"'
    word = "glass";
    break;
  case 3:  
    text = 'จงเรียงคำว่า "กระดาษ"'    
    word = "paper";
    break;
}

function App() {
  return (
    <body>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>{text}</h1>
      <br></br>
      <br></br>
        <div class="cardlayout">
          <WordCard value={word} />
        </div>
    </body>  
  );
}

export default App;
