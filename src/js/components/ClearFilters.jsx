import React from "react";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const ClearFilters = ({clear}) =>
	<div className="clear">
		<a 
			href="#" 
			onClick={clear}>Clear filters</a>
	</div>
export default ClearFilters;