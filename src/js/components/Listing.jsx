import React from "react";
import $ from "jquery";

class Listing extends React.Component{
	render(){
		return(
			<li className="listing">
				<figure>
					<img src={this.props.item.poster} />
					<h3>{this.props.item.title}</h3>
					<figcaption>
						Genres: {this.props.item.genre.join(', ')}
					</figcaption>
				</figure>
			</li>
		)
	}
}

export default Listing;