import React from "react";
import $ from "jquery";

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