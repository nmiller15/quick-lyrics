import React from 'react';
import './DisplayLyrics.css';
  
  function DisplayLyrics(props) {
    const lyricsLineBreaks = props.lyrics.replaceAll('\n', '<br/>')
    //console.log(lyricsLineBreaks)

    return (
	  <div className="lyrics-container">
      <h2>Song Title Here</h2>
      <h3>Song Artist Here</h3>
      <div dangerouslySetInnerHTML={{__html: lyricsLineBreaks}} />
	  </div>);
  }
  
  export default DisplayLyrics;
  