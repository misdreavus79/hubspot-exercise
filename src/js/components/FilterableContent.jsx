import React from "react";
import Listings from "./Listings";
import Genres from "./Genres";
import Years from "./Years";
import Search from "./Search";
import MovieFilter from "./MovieFilter";
import BookFilter from "./BookFilter";
import ClearFilters from "./ClearFilters";

class FilterableContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search: '',
			checkboxes: [],
		};

		//event bindings
		this.updateCheckboxes = this.updateCheckboxes.bind(this);
		this.filterBySearch = this.filterBySearch.bind(this);
		this.filterByMediaType = this.filterByMediaType.bind(this);
		this.updateSearchField = this.updateSearchField.bind(this);
		this.clearFilters = this.clearFilters.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.listings !== undefined){
			nextProps.listings.sort((a,b) => { //sort media listings by title
				if (a.title < b.title){
					return -1;
				}
				if (a.title > b.title){
					return 1;
				}
				return 0;
			});
			this.setState({
				listings: nextProps.listings,	
			});
		}
		if(nextProps.genres !== undefined){
			this.setState({
				genres: nextProps.genres
			});
		}
		if(nextProps.years !== undefined){
			this.setState({
				years: nextProps.years
			});
		}
	}
	updateSearchField(event){
		this.setState({
			search: event.target.value
		});
	}
	updateCheckboxes(event){
		if(event.target.checked){
			this.state.checkboxes.push(event.target.value)
		}else{
			let index = this.state.checkboxes.indexOf(event.target.value);
			this.state.checkboxes.splice(index, 1);
		}
		this.filterByCheckboxes();
	}
	filterByCheckboxes(event){
		if(this.state.checkboxes.length < 1){
			this.setState({
				listings: this.props.listings //if user unchecks every box, return to default state
			});
			return;
		}
		let filtered, i, total = [];
		for(i = 0; i < this.state.checkboxes.length; i++){
			filtered = this.props.listings.filter(
			    (single) => {
					return 	single.genre.includes(this.state.checkboxes[i]) ||
							single.year.includes(this.state.checkboxes[i]);
				}
			);
			total = total.concat(filtered);
		}
		total = this.props.filter.removeDuplicates(total);
		this.setState({
			listings: total
		});
	}
	filterByMediaType(event){
		let filtered = this.props.listings.filter(
		    (single) => {
				return single.type.includes(event.target.value);
			}
		);
		this.setState({
			listings: filtered
		});
	}
	filterBySearch(event){		
		if(event.keyCode === 13 || event.key === "Enter"){
			let filtered = this.props.filter.byObjectValue({
				target: this.props.listings,
				property: 'title',
				value: event.target.value,
				shouldInclude: true
			});
			this.setState({
				listings: filtered
			});
		}else{
			return;
		}
	}
	clearFilters(event){
		event.preventDefault(); //stop it from jumping to the top of the page.
		this.setState({
			listings: this.props.listings
		});
	}
	render(){
		return(
	        <section className="filterable-content">
				<div className="filters group">
					{
						this.state.genres !== undefined ? <Genres genres={this.state.genres} update={this.updateCheckboxes} /> : <em>Not Yet</em>
					}
					{
						this.state.years !== undefined ? <Years years={this.state.years} update={this.updateCheckboxes} /> : <em>Not Yet</em>
					}
					<Search search={this.state.search} update={this.updateSearchField} filter={this.filterBySearch} />
				</div>
				<div className="filters group">
					<MovieFilter filter={this.filterByMediaType} />
					<BookFilter filter={this.filterByMediaType} />
					<ClearFilters clear={this.clearFilters} />
				</div>
				<div className="results">
					{
						this.state.listings !== undefined ? <Listings listings={this.state.listings} /> : <em>Not Yet</em>
					}
				</div>
			</section>
		)
	}
}

export default FilterableContent;