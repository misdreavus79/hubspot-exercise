import React from "react";
import $ from "jquery";

class CTA extends React.Component{
	constructor(){
		super();
		this.state = {
			ctaText: `Ability decreases antimagic balance domain base save bonus caster level check class skill covering effective hit point
					  increase eladrin subtype enerty drained fear aura fear cone fear effect fraction frightful precense improved evasion
					  level massive damage melee attack mentalism domain racial hit die retribution domain spell threat range touch spell 
					  turn undead. Character coup de grace destruction domain fate domain goblinoid subtype lava effects monk mundane 
					  native subtype paralisys pattern subschool regeneration. Animal type aquatic subtype change shape competence
					  bonus dispel dispel turning drow domain gnome domain initiative count luck bonus overlap renewal domain scry 
					  spell descriptor spell resistance surprise total concealment unarmed attack.`
		};

		//event handlers
		this.generateText = this.generateText.bind(this);
	}
	componentWillMount(){
		//get list of jokes on first load
		$.ajax({
			url: 'http://api.icndb.com/jokes',
			method: 'GET',
			dataType: 'json',
			success: (data) => {
				let cleanJokes = data.value.filter((single) => {
					return !single.categories.includes('explicit'); //get rid of the naughty jokes
				});
				this.setState({
					jokeList: cleanJokes
				});
			},
			error: (xhr, status, err) => {
	        	console.error(status, err.toString());
	        }
		});
	}
	generateText(){
		//randomly assign a new joke to be displayed
		let index = Math.floor(Math.random() * this.state.jokeList.length);
		this.setState({
			ctaText: this.state.jokeList[index].joke
		});
	}
	render(){
		return(
			<section className="CTA">
				<div>
					<p className="ctaText">{this.state.ctaText}</p>
					<a className="ctaButton" onClick={this.generateText}>Tell Me More</a>
				</div>
			</section>
		)
	}
}

export default CTA;