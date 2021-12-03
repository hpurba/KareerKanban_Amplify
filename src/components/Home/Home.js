import React from 'react'
import { Link } from 'gatsby'

// const Home = () => <div>
//   <h1>Home</h1>
// 	<p>You are now logged in!<Link to="/app/profile">View profile</Link></p>
// 	<p>Now go build something great and deploy it using the <a href="https://console.amplify.aws">AWS Amplify Console</a></p>
// 	</div>

// export default Home


// import { NavLink } from "react-router-dom";
import bgShowcase1 from "./img/bg-showcase-1.jpeg";
import bgShowcase2 from "./img/bg-showcase-2.png";
import bgShowcase3 from "./img/bg-showcase-3.jpeg";
import jobApplicationSVG from "./img/jobApplicationSVG.svg";
import testimonial1 from "./img/testimonials-1.jpg";
import testimonial2 from "./img/testimonials-2.jpg";
import testimonial3 from "./img/testimonials-3.jpg";
import "./Home.css";
import "../styles.css";

const Home = () => <div>
	{/* <div> */}
	{/* <div className="container-snap"> */}
	<section className="">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 home-column">
					<div className="text-lg-start text-black homepage-text">
						<div className="homepage-huge-text">
							Job Application Management
						</div>
						<div className="homepage-huge-text">Done Right</div>
						<h4>
							Track every job application from aspiration to job offer.
						</h4>
						<h4>Free now and forever!</h4>

						<form>
							<div className="input-group input-group-lg">
								{/* <Link to="../Kanban/Kanban">Sign In</Link><br /> */}
								<Link to="../Kanban/Kanban">
									<button className="btn btn-primary btn-block">
										Get started for free!
									</button>
								</Link>
							</div>
						</form>

					</div>
				</div>
				<div className="col-lg-6 home-column">
					<img
						src={jobApplicationSVG}
						alt="job application svg"
						height="100%"
						width="100%"
					/>
				</div>
			</div>
		</div>
	</section>

	<section className="features-icons bg-light text-center">
		<div className="container">
			<div className="row">
				<div className="col-lg-4">
					<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
						<div className="features-icons-icon d-flex">
							<i className="bi-window m-auto text-primary"></i>
						</div>
						<h3>Fully Responsive Kanban</h3>
						<p className="lead mb-0">
							Organize and Simplify the Job Search Process with a
							KareerKanban!
						</p>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
						<div className="features-icons-icon d-flex">
							<i className="bi-layers m-auto text-primary"></i>
						</div>
						<h3>Kanban Kard</h3>
						<p className="lead mb-0">
							Each Job Application is a Kanban Kard. A Kanban Kard
							contains all application information!
						</p>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="features-icons-item mx-auto mb-0 mb-lg-3">
						<div className="features-icons-icon d-flex">
							<i className="bi-terminal m-auto text-primary"></i>
						</div>
						<h3>Easy to Use</h3>
						<p className="lead mb-0">
							First time to Kanban? It's as easy as moving a Kanban Kard
							from one column to the next!
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="showcase centered">
		<div className="container-fluid p-0">
			<div className="row g-0">
				<div
					className="col-lg-6 order-lg-2 text-white showcase-img scaled-to-fit-img"
					style={{
						backgroundImage: "url(" + bgShowcase1 + ")",
					}}
				></div>
				<div className="col-lg-6 order-lg-1 my-auto showcase-text">
					<h2>What is a Kanban?</h2>
					<p className="lead mb-0">
						Kanban boards visually depict work at various stages of a
						process using cards to represent work items and columns to
						represent each stage of the process.
					</p>
				</div>
			</div>
			<div className="row g-0">
				<div
					className="col-lg-6 text-white showcase-img scaled-to-fit-img"
					style={{
						backgroundImage: "url(" + bgShowcase2 + ")",
					}}
				></div>
				<div className="col-lg-6 my-auto showcase-text">
					<h2>What is a Kanban Kard?</h2>
					<p className="lead mb-0">
						A Kanban Kard is a Job Application and all data asssociated
						with it. A Kard holds important information like the job
						description, expected salary, location, your sent resume,
						and more!
					</p>
				</div>
			</div>
			<div className="row g-0">
				<div
					className="col-lg-6 order-lg-2 text-white showcase-img scaled-to-fit-img"
					style={{
						backgroundImage: "url(" + bgShowcase3 + ")",
					}}
				></div>
				<div className="col-lg-6 order-lg-1 my-auto showcase-text">
					<h2>Easy to Use & Customize</h2>
					<p className="lead mb-0">
						Your Kanban is your personal companion in the search for a
						great job! Life is just better with a friend and plan!
					</p>
				</div>
			</div>
		</div>
	</section>
	<section className="testimonials text-center bg-light">
		<div className="container">
			<h2 className="mb-5">What people are saying...</h2>
			<div className="row">
				<div className="col-lg-4">
					<div className="testimonial-item mx-auto mb-5 mb-lg-0">
						<img
							className="img-fluid rounded-circle mb-3"
							src={testimonial1}
							alt="..."
						/>
						<h5>Jane K.</h5>
						<p className="font-weight-light mb-0">
							"I managed hundreds of job applications and got my dream
							job! Thanks so much KareerKanban!"
						</p>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="testimonial-item mx-auto mb-5 mb-lg-0">
						<img
							className="img-fluid rounded-circle mb-3"
							src={testimonial2}
							alt="..."
						/>
						<h5>James L.</h5>
						<p className="font-weight-light mb-0">
							"KareerKanban's platform is easy and well integrated with
							other services! It's just amazing!"
						</p>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="testimonial-item mx-auto mb-5 mb-lg-0">
						<img
							className="img-fluid rounded-circle mb-3"
							src={testimonial3}
							alt="..."
						/>
						<h5>Emily R.</h5>
						<p className="font-weight-light mb-0">
							"This is a must for any job search!"
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer className="footer bg-light">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 h-100 text-center text-lg-start my-auto">
					<ul className="list-inline mb-2">
						<li className="list-inline-item">
							<a href="#!">About</a>
						</li>
						<li className="list-inline-item">⋅</li>
						<li className="list-inline-item">
							<a href="#!">Contact</a>
						</li>
						<li className="list-inline-item">⋅</li>
						<li className="list-inline-item">
							<a href="#!">Terms of Use</a>
						</li>
						<li className="list-inline-item">⋅</li>
						<li className="list-inline-item">
							<a href="#!">Privacy Policy</a>
						</li>
					</ul>
					<p className="text-muted small mb-4 mb-lg-0">
						&copy; KareerKanban 2021. All Rights Reserved.
					</p>
				</div>
				<div className="col-lg-6 h-100 text-center text-lg-end my-auto">
					<ul className="list-inline mb-0">
						<li className="list-inline-item me-4">
							<a href="#!">
								<i className="bi-facebook fs-3"></i>
							</a>
						</li>
						<li className="list-inline-item me-4">
							<a href="#!">
								<i className="bi-twitter fs-3"></i>
							</a>
						</li>
						<li className="list-inline-item">
							<a href="#!">
								<i className="bi-instagram fs-3"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div>
// </div>
// </div>

export default Home;
