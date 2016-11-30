import React from "react";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const Search = ({search, update, filter}) =>
	<div className="search">
		<input 
			type="text" 
			value={search} 
			onChange={update} 
			onKeyPress={filter} 
			placeholder="Press Enter to search" />
	</div>
export default Search;