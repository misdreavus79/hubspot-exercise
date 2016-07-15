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
		}
	}
	generateText(){
		$.ajax({
			url: 'https://api.icndb.com/jokes/random',
			method: 'GET',
			dataType: 'json',
			success: (data) => {
				this.setState({
					ctaText: data.value.joke
				});
			},
			error: (xhr, status, err) => {
	        	console.error(status, err.toString());
	        }
		});
	}
	render(){
		return(
			<section className="CTA">
				<div>
					<p className="ctaText">{this.state.ctaText}</p>
					<a className="ctaButton" onClick={this.generateText.bind(this)}>Tell Me More</a>
				</div>
			</section>
		)
	}
}

export default CTA;