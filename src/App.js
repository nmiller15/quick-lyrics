import React, {useState, useEffect, Suspense} from 'react';
import Genius from './utility/Genius';
import DisplayLyrics from './components/DisplayLyrics/DisplayLyrics';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Card from './components/Card/Card';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [songId, setSongId] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // * Sets lyrics state * currently mocked
  useEffect(() => {
    setLyrics(456537);
  }, [lyrics]);

  // * Sets Search results state * currently mocked
  useEffect(() => {
    const fetchSearchResults = async () => {
      const data = await Genius.search('Taylor Swift');
      console.log('data received by App.js', data);
  }
    fetchSearchResults();
  });
  
  function handleSearch(text) {
    setUserInput(text);
  }

  // * Test call to find song Id
  /*const testfunc = async function() {
    const test = await Genius.search('homesick and noah');
    console.log(Genius.returnId(test.response.hits[1]));
  }
  testfunc()*/

  


  return (
     <div>
      <Card />
      <SearchBar onSearch={handleSearch}/>
      <div className="two-col">
        <div className="left">
          
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
  )  
}

export default App;
