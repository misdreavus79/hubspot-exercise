import React from "react";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const Genre = ({genre, update}) =>
	<label>
		<input 
			type="checkbox" 
			name="genre" 
			value={genre} 
			onChange={update} /> {genre}
	</label>
export default Genre;