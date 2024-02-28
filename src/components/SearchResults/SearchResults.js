import React from 'react';
import Genius from '../../utility/Genius';
import Card from '../Card/Card';
  
  function SearchResults(props) {
    const resultsObject = JSON.parse(props.results);
    //console.log(typeof resultsObject[0]);
    const resultsArray = Object.entries(resultsObject);
    //console.log(typeof resultsArray);

  
    return (
      <div>
        {resultsArray.map((result, index) => {
          return <Card index={index} key={index} result={result[1]} />
        })}
      </div>
	  );
  }
  
  export default SearchResults;
  