import React from 'react';

function AchievementCard(props) {
	return (
		<div className="card text-bg-dark bg-transparent border border-2 border-light border-opacity-25">
			<img src={props.achievement.img} className="card-img-top" alt={props.achievement.title}/>
			<div className="card-body">
				<h5 className="card-title">{props.achievement.title}</h5>
				<p className="card-text">{props.achievement.description}</p>
				{/*<a href={props.project.link} className="btn btn-primary stretched-link">Go somewhere</a>*/}
			</div>
		</div>
	);
}

export default AchievementCard;
