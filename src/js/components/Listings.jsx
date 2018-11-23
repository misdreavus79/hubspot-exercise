import React from "react";
import Listing from "./Listing";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const Listings = ({listings}) =>
	<ul>
		{
			listings.map((single) => {
				return <Listing item={single} key={single.title} />
			});
		}
	</ul>

export default Listings;