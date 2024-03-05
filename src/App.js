import React, {useState, useEffect, useRef} from 'react';
import Genius from './utility/Genius';
import DisplayLyrics from './components/DisplayLyrics/DisplayLyrics';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Card from './components/Card/Card';
import './App.css';

function App() {
  // * State Management
  const [userInput, setUserInput] = useState('');
  const [songId, setSongId] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [searchResults, setSearchResults] = useState();
  const hasPageBeenRendered = useRef(false);
  



  // * Receives userInput, state updated by SearchBar
  // * Uses Genius.search to return search Results
  // * Sets the state of searchResults to be passed into SearchResults.js
  // * Executes when userInput state is changed
  useEffect(() => {
    if (!userInput) {
      return;
    }
    const fetchSearchResults = async () => {
      console.log('search executed');
      const data = await Genius.search(userInput);
      console.log('data received by App.js', data);
      setSearchResults(data);
    }
    fetchSearchResults();
    
  }, [userInput]);




  // * Receives songId, state updated by SearchResults
  // * Uses Genius.getLyrics to return lyric data
  // * Sets the state of lyrics to be passed into DisplayLyrics.js
  // * Executes when songId state is changed
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



  
  // * Function passed down to SearchBar.js
  // * Receives search bar value as an argument
  // * Sets state of UserInput
  function handleSearch(text) {
    setUserInput(text);
  }




  // * Function passed down to SearchResults.js
  // * Receives song id of song selected passed up from Card.js
  // * Sets state of songId
  function selectSong(id) {
    console.log('id received at App', id);
    setSongId(id);
  }

  


  return (
     <div>
      <SearchBar handleSearch={handleSearch}/>
      <div className="two-col">
        <div className="left">
          {/* Only display SearchResults if defined */}
          {searchResults 
            ? <SearchResults searchResults={searchResults} passId={selectSong}/>
            : <p>Search for a song!</p>
          }
        </div>
        <div className="right">
          {/* Only display lyrics if defined */}
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
