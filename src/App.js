import React, {useState, useEffect} from 'react';
import Genius from './utility/Genius';
import DisplayLyrics from './components/DisplayLyrics/DisplayLyrics';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Card from './components/Card/Card';
import mockLyricData from './mock/mockLyricData';
import MockSearchResultData from './mock/mockSearchResultData';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [songId, setSongId] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // * Sets lyrics state * currently mocked
  useEffect(() => {
    setLyrics(mockLyricData());
  }, [lyrics]);

  // * Sets Search results state * currently mocked
  useEffect(() => {
    const searchResults = MockSearchResultData().response.hits;
    const searchResultsString = JSON.stringify(searchResults);
    console.log(searchResultsString);
    setSearchResults(searchResultsString);
  }, [userInput]);
  
  const handleSearch = (text) => {
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
        <SearchResults results={searchResults}/>
        </div>
        <div className="right">
          <DisplayLyrics lyrics={lyrics}/>
        </div>
      </div>
    </div>
  )
  
  
}

export default App;
