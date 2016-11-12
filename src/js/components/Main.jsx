import React from "react";
import ReactDOM from "react-dom";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import FilterableContent from "./FilterableContent";
import Ajax from "../lib/Ajax";

class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			listings: [],
			genres: [],
			years: [],
			quote: `Polaroid bushwick microdosing tattooed. 
					Cornhole single-origin coffee bycicle rights lumbersexual, 
					pour-over intelligentsia bahn mi ethical selfies schlitz raw
					demin 90's leggings. Art party venmo chia, fap lubersexual mustache actually
					tilde disrupt kinfolk cray health goth +1.`,
			citation: "Indiana Jones, Archaeologist"
		}
	}
	componentWillMount(){
		let ajax = new Ajax();
		ajax.get(this.props.url).then((response) => {
			
			let data = JSON.parse(response);
			this.setState({
				listings: data.media,
			});
			this.generateDynamicYears();
			this.generateDynamicGenres();
		}).catch((error) => {
			console.error("Request failed.", error);
		});
	}
	generateDynamicYears(){
		//extract the years from the provided data
		let filtered = this.state.listings.map((single) => {
			return single.year;
		});
		filtered = Array.from(new Set(filtered)).sort(); //remove duplicates and sort
		this.setState({
			years: filtered
		});
	}
	generateDynamicGenres(){

		//extract the genres from the provided data
		let filtered = this.state.listings.map((single) => {
			return single.genre;
		}),
		finalGenres = [];

		//iterate through multi-dimensional array and create a single array of genres
		filtered.forEach((i) => {
			i.forEach((j) => {
				finalGenres.push(j);
			});
		});

		finalGenres = Array.from(new Set(finalGenres)).sort(); //remove duplicates and sort

		this.setState({
			genres: finalGenres
		})
	}
	render(){
		return(
		   	<div className="container">
			   <h2>Sample 1 - Static Text</h2>
			   <Testimonial quote={this.state.quote} citation={this.state.citation} />
			   <h2>Sample 2 - Dynamic Text</h2>
			   <CTA />
			   <h2>Sample 3 - Filterable Content</h2>
		       <FilterableContent listings={this.state.listings} genres={this.state.genres} years={this.state.years} />
		    </div>
		)
	}
}

ReactDOM.render(<Main url="js/data/data.json" />, document.getElementById('app'));