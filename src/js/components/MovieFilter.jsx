import React from "react";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const MovieFilter = ({filter}) =>
	<div className="radio">
		<input 
			type="radio" 
			name="choice" 
			value="movie" 
			onClick={filter} />
		<label>Movies</label>
	</div>
export default MovieFilter;