import React from "react";

/*
Presentational component. 
Parent component sends the data as props,
which can be changed at any time and rerendered
*/

const Testimonial = ({ citation, quote }) =>
	<div className="testimonial-block">
		<div className="testimonial">
			<p className="quote">{quote}</p>
			<span className="citation">{citation}</span>
		</div>
	</div>

export default Testimonial;