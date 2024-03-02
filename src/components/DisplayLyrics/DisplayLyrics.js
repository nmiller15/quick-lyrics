import React from 'react';
import './DisplayLyrics.css';
  
  function DisplayLyrics(props) {
    if (!props.lyrics) {
      return;
    }
    console.log('lyrics received by DisplayLyrics.js', props.lyrics);
    const lyrics = props.lyrics.response.lyrics.lyrics.body.plain;
    console.log('lyrics located', lyrics);
    const lyricsLineBreaks = lyrics.replaceAll('\n', '<br/>')
    console.log('lyrics linebreaks replaced', lyricsLineBreaks)

    return (
	  <div className="lyrics-container">
      <h2>Song Title Here</h2>
      <h3>Song Artist Here</h3>
      <div dangerouslySetInnerHTML={{__html: lyricsLineBreaks}} />
	  </div>
    );
  }
  
  export default DisplayLyrics;
  