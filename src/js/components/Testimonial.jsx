import React from "react";

/*
Presentational component. 
Since data isn't changing, the quote and and citation 
state variables can alternatively be input directly into the component.
Using state allows for the flexibility to mutate the data at a later date.
*/
class Testimonial extends React.Component{
	constructor(){
		super();
		this.state = { 
			quote: `Polaroid bushwick microdosing tattooed. 
					Cornhole single-origin coffee bycicle rights lumbersexual, 
					pour-over intelligentsia bahn mi ethical selfies schlitz raw
					demin 90's leggings. Art party venmo chia, fap lubersexual mustache actually
					tilde disrupt kinfolk cray health goth +1.`,
			citation: "Indiana Jones, Archaeologist"
		}
	}
	render(){
		return(
			<div className="testimonial-block">
				<div className="testimonial">
					<p className="quote">{this.state.quote}</p>
					<span className="citation">{this.state.citation}</span>
				</div>
			</div>
		)
	}
}

export default Testimonial;