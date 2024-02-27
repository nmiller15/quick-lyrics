import React, {useState, useEffect} from 'react';
import Genius from './utility/Genius';
import mockLyricData from './mock/mockLyricData';
import DisplayLyrics from './components/DisplayLyrics/DisplayLyrics';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [songId, setSongId] = useState('');
  const [lyrics, setLyrics] = useState('');
  
  // * Sets lyrics state * currently mocked
    useEffect(() => {
      setLyrics(mockLyricData());
    }, [lyrics])
  
    // * Test call to find song Id
  /*const testfunc = async function() {
    const test = await Genius.search('homesick and noah');
    console.log(Genius.returnId(test.response.hits[1]));
  }
  testfunc()*/

  


  return (
    <>
      <DisplayLyrics lyrics={lyrics}/>
    </>
  )
  
  
}

export default App;
