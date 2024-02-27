import React, {useState} from 'react';
  
  function SearchBar({ handleSearch }) {
    const [userText, setUserText] = useState('');

    const handleChange = (e) => {
        setUserText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(userText);
    }

    return (
	  <form onSubmit={handleSubmit}>
        <input value={userText} type="text" onChange={handleChange} />
        <input type="submit"/>
	  </form>
	);
  }
  
  export default SearchBar;
  