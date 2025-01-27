import React from 'react';

function ProjectCard(props) {
	return (
		<div className="card text-bg-dark bg-transparent border border-2 border-light border-opacity-25 h-100">
			<img src={props.project.img} className="card-img-top" alt={props.project.title}/>
			<div className="card-body">
				<h5 className="card-title fw-bold">{props.project.title}</h5>
				<p className="card-text">{props.project.description}</p>
				<a href={props.project.link} className="stretched-link" target="_blank" rel="noreferrer"/>
			</div>
		</div>
	);
}

export default ProjectCard;
