import React, {useState} from 'react';
import Genius from './utility/Genius';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [songId, setSongId] = useState(null);

  // * Test call to find song Id
  /*const testfunc = async function() {
    const test = await Genius.search('homesick and noah');
    console.log(Genius.returnId(test.response.hits[1]));
  }
  testfunc()*/

  
  
}

export default App;
