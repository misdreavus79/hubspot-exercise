import React from "react";
import Genre from "./Genre";
/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const Genres = ({genres, update}) =>
	<div className="genres">
		<span className="dropdown">Genre</span>
		<div className="checkboxes">
			{
				genres.map((single) => {
					return <Genre genre={single} key={single} update={update} />
				})
			}
		</div>
	</div>
export default Genres;