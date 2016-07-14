import React from "react";

class FilterableContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			listings: this.props.data
		};
	}
	filterByMediaType(){

	}
	clearFilters(){
		this.setState({
			listings: this.props.data
		});
	}
	render(){
		return(
	        <section className="filterable-content">
				<div>
					<div>
						<div>
							<div className="filters group">
								<div className="dropdown">
									<span>Genre</span>
									<div>
									{
										this.state.listings.map((single) => {	
											return <Year year={single.genre} key={single.title} /> 
										});
									}
									</div>
								</div>
								<div className="dropdown">
									<span>Year</span>
									<div>
									{
										let uniqueYears = (this.state.listings)
										this.state.listings.map((single) => {	
											return <Year year={single.year} key={single.title} /> 
										});
									}
									</div>
								</div>
								<div className="search">
									<input type="text">
								</div>
							</div>
							<div className="filters group">
								<div className="radio">
									<input type="radio" name="choice" value="movies" onClick={this.filterByMediaType.bind(this)}>
									<label>Movies</label>
								</div>
								<div className="radio">
									<input type="radio" name="choice" value="books" onClick={this.filterByMediaType.bind(this)}>
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
								this.state.listings.map((single) = {
									return <Listing data={single} key={single.title} />
								});
							}
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}