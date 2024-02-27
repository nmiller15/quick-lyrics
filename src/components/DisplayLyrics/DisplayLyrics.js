import React from 'react';
  
  function DisplayLyrics(props) {
    const lyricsLineBreaks = props.lyrics.replaceAll('\n', '<br/>')
    //console.log(lyricsLineBreaks)

    return (
	  <div dangerouslySetInnerHTML={{__html: lyricsLineBreaks}} />
	  );
  }
  
  export default DisplayLyrics;
  