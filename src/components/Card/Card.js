import React from 'react';
import './Card.css';
  
function Card(props) {
	// * Props from SearchResults.js: index, key, result, selectSong()


	// * Early return if no result
	if(!props.result) {
		return;
	}


	// * Locates song info within json data
	console.log('results array received at Card', props.result);
	const songInfo = props.result.result;
	console.log('song info located', songInfo);



	// * Declares variables assigning song info to display in card
	const imgSrc = songInfo.song_art_image_url;
	const songTitle = songInfo.title_with_featured;
	const artist = songInfo.artist_names;
	const id = songInfo.id;



	// * Function to handle button click
	// * Calls SearchResults.js' `handleButton()`
	// * Passes song id to SearchResults.js to call lyrics in App.js
	const handleClick = () => {
		console.log('click handled');
		props.handleButton(id);
	}
	
	
	return (
		<div className="card">
			<div className="img-container">
				<img src={imgSrc} alt={`${songTitle} by ${artist} song art`}/>
			</div>
			<div className="text-container">
				<h3 className="single-line">{songTitle}</h3>
				<p className="single-line">{artist}</p>
				<div className="button-container">
					<button onClick={handleClick}>Show Lyrics</button>
				</div>
			</div>
		</div>
	);
	
	
}


  export default Card;
  