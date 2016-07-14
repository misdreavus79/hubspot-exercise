import React from "react";
import $ from "jquery";

class CTA extends React.Component{
	constructor(){
		super();
		this.state = {
			ctaText: `Polaroid bushwick microdosing tattooed. 
					Cornhole single-origin coffee bycicle rights lumbersexual, 
					pour-over intelligentsia bahn mi ethical selfies schlitz raw
					demin 90's leggings. Art party venmo chia, fap lubersexual mustache actually
					tilde disrupt kinfolk cray health goth +1.`
		}
	}
	generateText(){
		$.ajax({
			url: 'http://api.icndb.com/jokes/random',
			method: 'GET',
			dataType: 'json',
			success: (data) => {
				this.setState({
					ctaText: data.value.joke
				});
			},
			error: (xhr, status, err) => {
	        	console.error(status, err.toString());
	        }
		});
	}
	render(){
		return(
			<section>
				<div>
					<p className="ctaText">{this.state.ctaText}</p>
					<a className="ctaButton" onClick={this.generateText.bind(this)}>Tell Me More</a>
				</div>
			</section>
		)
	}
}

export default CTA;