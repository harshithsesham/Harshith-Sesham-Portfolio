import React from 'react';

function WorkCard(props) {
	return (
		<div className="card text-bg-dark bg-transparent border border-2 border-light border-opacity-25">
			<img src={props.work.img} className="card-img-top" alt={props.work.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }}/>
			<div className="card-body">
				<h5 className="card-title fw-bold">{props.work.title}</h5>
				<p className="card-text">{props.work.description}</p>
				<a href={props.work.link} className="stretched-link" target="_blank" rel="noreferrer"/>
			</div>
		</div>
	);
}

export default WorkCard;
