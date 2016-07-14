import React from "react";
import $ from "jquery";

class FilterableContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			listings: "Loading..."
		};
	}
	getMedia(){ 
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: (data) => {
				this.setState({
					listings: data.media
				});
				this.generateDynamicComponents();
			},
			error: (xhr, status, err) => {
	        	console.error(this.props.url, status, err.toString());
	        }
		});
	}
	componentWillMount(){
		this.getMedia();
	}
	generateDynamicComponents(){
		
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
										// this.state.listings.map((single) => {	
										// 	return <Year year={single.genre} key={single.title} /> 
										// })
									}
									</div>
								</div>
								<div className="dropdown">
									<span>Year</span>
									<div>
									{
										// this.state.listings.map((single) => {	
										// 	return <Year year={single.year} key={single.title} /> 
										// })
									}
									</div>
								</div>
								<div className="search">
									<input type="text" />
								</div>
							</div>
							<div className="filters group">
								<div className="radio">
									<input type="radio" name="choice" value="movies" onClick={this.filterByMediaType.bind(this)} />
									<label>Movies</label>
								</div>
								<div className="radio">
									<input type="radio" name="choice" value="books" onClick={this.filterByMediaType.bind(this)} />
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
								// this.state.listings.map((single) => {
								// 	return <Listing data={single} key={single.title} />
								// })
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