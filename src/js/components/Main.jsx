import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import FilterableContent from "./FilterableContent";

class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			listings: [],
			genres: [],
			years: []
		}
	}
	componentWillMount(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: (data) => {
				this.setState({
					listings: data.media,
				});
				this.generateDynamicYears();
				this.generateDynamicGenres();
			},
			error: (xhr, status, err) => {
	        	console.error(this.props.url, status, err.toString());
	        }
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
			   <Testimonial />
			   <h2>Sample 2 - Dynamic Text</h2>
			   <CTA />
			   <h2>Sample 3 - Filterable Content</h2>
		       <FilterableContent listings={this.state.listings} genres={this.state.genres} years={this.state.years} />
		    </div>
		)
	}
}

ReactDOM.render(<Main url="js/data/data.json" />, document.getElementById('app'));