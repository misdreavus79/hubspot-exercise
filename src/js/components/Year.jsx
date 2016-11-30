import React from "react";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const Year = ({year, update}) =>
	<label>
		<input 
			type="checkbox" 
			name="year" 
			value={year} 
			onChange={update} /> {year}
	</label>
export default Year;