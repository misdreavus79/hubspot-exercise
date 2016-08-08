import React from "react";
import Listing from "./Listing";

class FilterableContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			listings: this.props.listings,
			genres: this.props.genres,
			years: this.props.years,
			search: '',
			checkboxes: []
		};
		this.updateCheckboxes = this.updateCheckboxes.bind(this);
	}
	componentWillReceiveProps(nextProps){
		nextProps.listings.sort((a,b) => {
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
			genres: nextProps.genres,
			years: nextProps.years,	
		});
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
			let filtered = this.props.listings.filter(
				(single) => {
					return single.title.toLowerCase().includes(event.target.value.toLowerCase());
				}
			);
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
				<div>
					<div>
						<div>
							<div className="filters group">
								<div className="genres">
									<span className="dropdown">Genre</span>
									<div className="checkboxes">
									{
										this.state.genres.map((single) => {	
											return <label key={single}><input type="checkbox" name="genre" value={single} onChange={this.updateCheckboxes} /> {single}</label>
										})
									}
									</div>
								</div>
								<div className="years">
									<span className="dropdown">Year</span>
									<div className="checkboxes">
									{
										this.state.years.map((single) => {	
											return <label key={single}><input type="checkbox" name="year" value={single} onChange={this.updateCheckboxes} /> {single}</label>
										})
									}
									</div>
								</div>
								<div className="search">
									<input type="text" value={this.state.search} onChange={this.updateSearchField.bind(this)} onKeyPress={this.filterBySearch.bind(this)} placeholder="Press Enter to search" />
								</div>
							</div>
							<div className="filters group">
								<div className="radio">
									<input type="radio" name="choice" value="movie" onClick={this.filterByMediaType.bind(this)} />
									<label>Movies</label>
								</div>
								<div className="radio">
									<input type="radio" name="choice" value="book" onClick={this.filterByMediaType.bind(this)} />
									<label>Books</label>
								</div>
								<div className="clear">
									<a href="#" onClick={this.clearFilters.bind(this)}>Clear filters</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="results">
					<div>
						<div>
							<ul>
							{
								this.state.listings.map((single) => {
									return <Listing item={single} key={single.title} />
								})
							}
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default FilterableContent;