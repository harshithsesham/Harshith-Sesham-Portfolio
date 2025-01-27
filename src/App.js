import Logo from './img/favicon.png';
import Masthead from './img/harshu.jpg';
import {useState} from "react";
import ProjectCard from "./Components/ProjectCard";
import WorkCard from "./Components/WorkCard";
import {categories, projects, workExperience, achievements} from './Data';
import AchievementCard from "./Components/AchievementCard";
import Resume from './Harshithsesham_Resume_final_apply.pdf'


function App() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	function getProjects() {
		if (selectedCategory !== "All") {
			return projects.filter(project => project.category.includes(selectedCategory));
		} else {
			return projects;
		}
	}

	return (
		<>
			<div className="container">
				{/* NAVIGATION */}
				<nav className="navbar navbar-expand-sm navbar-dark bg-transparent ">
					<div className="container-fluid">
						{/* Logo */}
						{/*<a className="navbar-brand" href="#">*/}
						{/*	<img src={Logo} alt="Bootstrap" width={50}/>*/}
						{/*</a>*/}

						{/* Hamburger Menu */}
						<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-links">
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* Navbar Links */}
						<div className="collapse navbar-collapse d-sm-flex flex-row-reverse" id="navbar-links">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="#about">About</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#projects">Projects</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#work">Work</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#achievements">Achievements</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				{/* HEADER */}
				<section id="header">
					<div className="row align-items-center">
						<div className="col-12 col-sm-6">
							<img src={Masthead} alt="" width="100%"/>
						</div>

						<div className="col-12 col-sm-6">
							<h2 className={"mb-0"}>Hi, I'm</h2>
							{/*, borderBottom: "5px solid #00e676"*/}
							<h1 style={{color: "#00e676"}}>Harshith Sesham</h1>
							{/*<h3>Software Engineer, </h3>*/}

							<div className="hstack gap-3">
								<a className="link-light" href="https://www.linkedin.com/in/harshith-sesham-a06043199/"
								   target="_blank">
									<i className="bi bi-linkedin"/>
								</a>
								<a className="link-light" href="https://github.com/harshithsesham" target="_blank">
									<i className="bi bi-github"/>
								</a>
								<a className="link-light" href="mailto:harshithsesham007@gmail.com" target="_blank">
									<i className="bi bi-envelope"/>
								</a>
								<a className="link-light" href="https://www.instagram.com/harshithsesham/" target="_blank">
									<i className="bi bi-instagram"/>
								</a>
							</div>

							<a className="btn btn-outline-danger mt-4 px-5" role="button"
							   href={Resume} download={"Harshithsesham_Resume_final_apply.pdf"}>
								<i className="bi bi-download"/> Résumé
							</a>
						</div>
					</div>

					<a href="#about"><i className="bi bi-chevron-down fs-1 fw-bold chevron text-light"/></a>
				</section>

				{/*	ABOUT */}
				<section id="about" className="mt-3">
					<h2>About Me</h2>
					<p className="lead">
						I am a fun loving Software Development Engineer at Amazon with 2 years of experience building distributed systems and large-scale web applications. Passionate about solving complex technical challenges, driving innovation, and creating impactful, scalable software solutions that enhance customer experiences.
					</p>
				</section>

				{/*	PROJECTS */}
				<section id="projects" className="mt-5">
					<h2>Projects</h2>

					{/* Filters */}
					<div className="row g-2">
						{
							categories.map(category => (
								<div className="col-6 col-sm-4 col-md-3 col-lg-2">
									<button
										className={`btn rounded-pill ${selectedCategory === category[0] ? 'btn-' : 'btn-outline-'}${category[1]} w-100 }`}
										onClick={() => setSelectedCategory(category[0])}>
										{category[0]}
									</button>
								</div>
							))
						}
					</div>

					{/*	PROJECTS */}
					<div className="row g-2 mt-3">
						{
							getProjects().map(project => (
								<div className="col-12 col-md-6 col-lg-3">
									<ProjectCard project={project}/>
								</div>
							))
						}
					</div>
				</section>

				{/*	WORK */}
				<section id="work" className="mt-5">
					<h2>Work Experience</h2>

					<div className="row g-2">
						{
							workExperience.map(work => (
								<div className="col-12 col-md-6 col-lg-4">
									<WorkCard work={work}/>
								</div>
							))
						}
					</div>
				</section>

				{/*/!*	ACHIEVEMENTS *!/*/}
				{/*<section id="achievements" className="mt-5">*/}
				{/*	<h2>Achievements</h2>*/}

				{/*	<div className="row g-2">*/}
				{/*		{*/}
				{/*			achievements.map(achievement => (*/}
				{/*				<div className="col-12 col-md-6 col-lg-4">*/}
				{/*					<AchievementCard achievement={achievement}/>*/}
				{/*				</div>*/}
				{/*			))*/}
				{/*		}*/}
				{/*	</div>*/}
				{/*</section>*/}
			</div>

			{/*	Back to top */}
			<div className="sticky-md-bottom float-end">
				<div className="text-center">
					<a href="#" className="nav-link">
						<i className="bi bi-caret-up-fill"></i> Back to top
					</a>
				</div>
			</div>
		</>
	);
}

export default App;
