import React from "react";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const Listing = ({item}) =>
	<li className="listing">
		<figure>
			<img src={item.poster} />
			<h3>{item.title}</h3>
			<figcaption>
				Genres: {item.genre.join(', ')}
			</figcaption>
		</figure>
	</li>

export default Listing;