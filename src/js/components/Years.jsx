import React from "react";
import Year from "./Year";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const Years = ({years, update}) =>
	<div className="years">
		<span className="dropdown">Year</span>
		<div className="checkboxes">
			{
				years.map((single) => {
					return <Year year={single} key={single} update={update} />
				})
			}
		</div>
	</div>
export default Years;