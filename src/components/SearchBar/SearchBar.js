import React, {useState} from 'react';
  
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


    // TODO: Add labels and ids to form fields
    return (
    <form onSubmit={handleSubmit}>
        <input value={userText} type="text" onChange={handleChange} />
        <input type="submit"/>
	  </form>
	);
  }
  
  export default SearchBar;
  