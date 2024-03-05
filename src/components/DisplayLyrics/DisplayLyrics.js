import React from 'react';
import './DisplayLyrics.css';
  
  function DisplayLyrics(props) {
    // * Props from App.js: lyrics


    // * Early return if no lyrics
    if (!props.lyrics) {
      return;
    }


    // * Locates lyrics in plain text
    console.log('lyrics received by DisplayLyrics.js', props.lyrics);
    const lyrics = props.lyrics.lyrics.lyrics.body.plain;
    console.log('lyrics located', lyrics);



    // * Replaces '\n' line breaks with html <br/>
    const lyricsLineBreaks = lyrics.replaceAll('\n', '<br/>')
    console.log('lyrics linebreaks replaced', lyricsLineBreaks)



    // * Locates song information in lyrics object
    const songTitle = props.lyrics.lyrics.tracking_data.title;
    const artist = props.lyrics.lyrics.tracking_data.primary_artist;


    
    return (
	  <div className="lyrics-container">
      <h2>{songTitle}</h2>
      <h3>{artist}</h3>
      {/* Detects HTML within the string and converts to elements */}
      <div dangerouslySetInnerHTML={{__html: lyricsLineBreaks}} />
	  </div>
    );
  }
  
  export default DisplayLyrics;
  