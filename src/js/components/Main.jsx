import React from "react";
import ReactDOM from "react-dom";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import FilterableContent from "./FilterableContent";

class Main extends React.Component {
	render(){
		return(
		   	<div className="container">
			   <h2>Exercise 1 - Testimonial Block</h2>
			   <Testimonial />
			   <h2>Exercise 2 - CTA Quote</h2>
			   <CTA />
			   <h2>Exercise 3 - Filterable Content</h2>
		       <FilterableContent url={this.props.url} />
		    </div>
		)
	}
}

ReactDOM.render(<Main url="js/data/data.json" />, document.getElementById('app'));