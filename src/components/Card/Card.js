import React from 'react';
import './Card.css';
  
function Card(props) {
	if(!props.result) {
		return;
	}
	console.log('results array received at Card', props.result);
	const songInfo = props.result.result;
	console.log('song info located', songInfo);

	const imgSrc = songInfo.song_art_image_url;
	const songTitle = songInfo.title_with_featured;
	const artist = songInfo.artist_names;
	const id = songInfo.id;

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
				<h3>{songTitle}</h3>
				<p>{artist}</p>
				<button onClick={handleClick}>Show Lyrics</button>
			</div>
		</div>
	);
	
	
}


  export default Card;
  