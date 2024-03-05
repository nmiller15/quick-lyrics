import React, {useState} from 'react';
import './SearchBar.css';
  
  function SearchBar({ handleSearch }) {
    // * handleSearch() received from App.js
    // * Takes search bar value as an argument


    // * State management for search bar value
    const [userText, setUserText] = useState('');

    
    // * Handles updates in search bar value
    // * Takes event object (change)
    // * Sets userText state
    const handleChange = (e) => {
        setUserText(e.target.value);
    }



    // * Handles form submission, hitting search bar
    // * Takes event object (button press)
    // * Calls handleSearch in App.js passing userText
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(userText);
    }


  
    return (
    <form className="form-container" onSubmit={handleSubmit}>
        <label for="input-field" className="no-display">Search for a song</label>
        <input id="input-field" className="input-field" placeholder="Search for a song" value={userText} type="text" onChange={handleChange} />
        <input className="submit-button" type="submit"/>
	  </form>
	);
  }
  
  export default SearchBar;
  