import React, {useState} from 'react';
import Genius from '../../utility/Genius';
import Card from '../Card/Card';
  
  function SearchResults(props) {
    // * Props from App.js: `searchResults` object and `passId()` function
    

    // * Early return if no searchResults object
    if (!props.searchResults) {
      return;
    }


    // * Locate the results array within the searchResults object
    console.log('Data received at SearchResults', props.searchResults);
    const responseArray = props.searchResults.response.hits;
    console.log('results array located', responseArray);
    

    // * Function passed down to Card.js
    // * Receives song id as an argument
    // * Calls App.js' `passId()` function
    // * Passes id from Card.js to call lyrics in App.js
    function selectSong(id) {
      console.log('button pressed, id is', id);
      props.passId(id);
    }


      
    return (
        <div>
        {/* Iterates over response array assigning values to multiple cards */}
        {responseArray.map((result, index) => {
          return <Card index={index} key={index} result={result} handleButton={selectSong} />
        })}
        </div>
     );
  }
  
  export default SearchResults;
  