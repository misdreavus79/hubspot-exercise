import React from "react";

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
			<div>
				<div className="testimonial-block">
					<p className="quote">{this.state.quote}</p>
					<span className="citatation">{this.state.citation}</span>
				</div>
			</div>
		)
	}
}

export default Testimonial;