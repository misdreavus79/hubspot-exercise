import React from "react";
import Listing from "./Listing";

class FilterableContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			listings: this.props.listings,
			genres: this.props.genres,
			years: this.props.years,
			search: ''
		};
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			listings: nextProps.listings,
			genres: nextProps.genres,
			years: nextProps.years,	
		});
	}
	filterByGenre(event){
		let filtered = this.props.listings.filter(
		    (single) => {
				return single.genre.includes(event.target.value);
			}
		);
		this.setState({
			listings: filtered
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
		let filtered = this.props.listings.map((single) => {
			return single.title.includes(event.target.value);
		});
		this.setState({
			search: event.target.value,
			listings: filtered
		});
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
											return <label key={single}><input type="checkbox" name="genre" value={single} onClick={this.filterByGenre.bind(this)} /> {single}</label>
										})
									}
									</div>
								</div>
								<div className="years">
									<span className="dropdown">Year</span>
									<div className="checkboxes">
									{
										this.state.years.map((single) => {	
											return <label key={single}><input type="checkbox" name="genre" value={single} /> {single}</label>
										})
									}
									</div>
								</div>
								<div className="search">
									<input type="text" value={this.state.search} onChange={this.filterBySearch.bind(this)} />
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