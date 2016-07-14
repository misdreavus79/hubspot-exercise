import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			data: "Loading..."
		}
	}
	getMedia(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: (data) => {
				this.setState({
					data: data.media
				});
			},
			error: (xhr, status, err) => {
	        	console.error(this.props.url, status, err.toString());
	        }
		});
	}
	componentWillMount(){
		this.getMedia();
	}
	render(){
		return(
	       <FilterableContent data={this.state.data} />
		)
	}
}