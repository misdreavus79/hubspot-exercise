import React from "react";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const BookFilter = ({filter}) =>
	<div className="radio">
		<input 
			type="radio" 
			name="choice" 
			value="book" 
			onClick={filter} />
		<label>Books</label>
	</div>
export default BookFilter;