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
  const [searchResults, setSearchResults] = useState();
  
  // * Sets lyrics state * currently mocked
  useEffect(() => {
    if (!songId) {
      return;
    }
    const fetchLyrics = async () => {
      const newLyrics = await Genius.getLyrics(songId);
      console.log('lyrics received by App.js', newLyrics);
      setLyrics(newLyrics);
    } 
    fetchLyrics();
  }, [songId]);

  // * Sets Search results state * currently mocked
  useEffect(() => {
    const fetchSearchResults = async () => {
      const data = await Genius.search('Taylor Swift');
      console.log('data received by App.js', data);
      setSearchResults(data);
  }
    fetchSearchResults();
  }, [userInput]);
  
  function handleSearch(text) {
    setUserInput(text);
  }

  function selectSong(id) {
    console.log('id received at App', id);
    setSongId(id);
  }

  


  return (
     <div>
      <SearchBar onSearch={handleSearch}/>
      <div className="two-col">
        <div className="left">
          {searchResults 
            ? <SearchResults searchResults={searchResults} passId={selectSong}/>
            : <p>Loading...</p>
          }
        </div>
        <div className="right">
          {lyrics
            ? <DisplayLyrics lyrics={lyrics}/>
            : <p>Select a song to see the lyrics!</p>
          }
        </div>
      </div>
    </div>
  )  
}

export default App;
