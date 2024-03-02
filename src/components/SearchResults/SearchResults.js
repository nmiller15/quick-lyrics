import React, {useState} from 'react';
import Genius from '../../utility/Genius';
import Card from '../Card/Card';
  
  function SearchResults(props) {

    if (!props.searchResults) {
      return;
    }
    console.log('Data received at SearchResults', props.searchResults);
    const responseArray = props.searchResults.response.hits;
    console.log('results array located', responseArray);
    
    function selectSong(id) {
      console.log('button pressed, id is', id);
      props.passId(id);
    }
      
    return (
        <div>
        {responseArray.map((result, index) => {
          return <Card index={index} key={index} result={result} handleButton={selectSong} />
        })}
        </div>
     );
  }
  
  export default SearchResults;
  