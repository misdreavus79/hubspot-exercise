import React from "react";
import ReactDOM from "react-dom";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import FilterableContent from "./FilterableContent";
import Ajax from "../lib/Ajax";
import Filter from "../lib/Filter";

class Main extends React.Component {
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
	componentWillMount(){
		this.props.ajax.getJson(this.props.url).then((response) => {
			this.setState({
				listings: response.media
			});
			this.generateCheckboxes();
		}).catch((error) => {
			console.error("Request failed.", error);
		});
	}
	generateCheckboxes(){
		//extract the years and genres from the provided data
		let years = this.state.listings.map((single) => {
			return single.year;
		}),
		genres = this.state.listings.map((single) => {
			return single.genre;
		}).reduce((a, b) => { //make a single array of genres from the returned multi-dimensional array
			return a.concat(b);
		});

		//remove duplicates and sort
		years = this.props.filter.removeDuplicates(years).sort(); 
		genres = this.props.filter.removeDuplicates(genres).sort(); 

		this.setState({
			genres: genres,
			years: years
		});
	}
	render(){
		return(
		   	<div className="container">
			   <h2>Sample 1 - Static Text</h2>
			   <Testimonial quote={this.state.quote} citation={this.state.citation} />
			   <h2>Sample 2 - Dynamic Text</h2>
			   <CTA ajax={this.props.ajax} filter={this.props.filter} />
			   <h2>Sample 3 - Filterable Content</h2>
		       <FilterableContent listings={this.state.listings} genres={this.state.genres} years={this.state.years} filter={this.props.filter} />
		    </div>
		)
	}
}

Main.defaultProps = {
	filter : new Filter(),
	ajax : new Ajax()
}

ReactDOM.render(<Main url="https://storage.googleapis.com/sca/random/data.json" />, document.getElementById('app'));