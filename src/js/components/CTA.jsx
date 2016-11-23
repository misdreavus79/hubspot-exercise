import React from "react";

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
					  spell descriptor spell resistance surprise total concealment unarmed attack.`,
			jokeList: [],
			loadStatus: "Loading Jokes..."
		};

		//event handlers
		this.generateText = this.generateText.bind(this);
	}
	componentWillMount(){
		this.props.ajax.getJson('http://api.icndb.com/jokes').then((response) => {

			let cleanJokes = this.props.filter.byObjectValue({
				target: response.value,
				property: 'categories',
				value: 'explicit',
				shouldInclude: false
			});
			this.setState({
				jokeList: cleanJokes,
				loadStatus: "Tell Me More"
			});
		}).catch((error) => {
			console.error("Request failed.", error);
			this.setState({
				loadStatus: "Error loading jokes"
			});
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
				<p className="ctaText">{this.state.ctaText}</p>
				<a className="ctaButton" onClick={this.generateText}>{this.state.loadStatus}</a>
			</section>
		)
	}
}

export default CTA;