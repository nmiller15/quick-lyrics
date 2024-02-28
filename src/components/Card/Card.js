import React from 'react';
import './Card.css';
  
  function Card({index, result}) {
	if(result) {
		const r = result.result;
		const imgSrc = r.song_art_image_url;
		const artist = r.artist_names;
		const title = r.title_with_featured;
		const songId = r.id;
		const geniusUrl = r.url; 
		
		return (
			<div className="card">
				<div className="img-container">
					<img src={imgSrc} alt={`${title} by ${artist} song art`}/>
				</div>
				<div className="text-container">
					<h3>{title}</h3>
					<p>{artist}</p>
					<button>Show Lyrics</button>
				</div>
	  		</div>
		);
	} else {
		return (
			<>
				
			</>
		);		
	}

};
  export default Card;
  