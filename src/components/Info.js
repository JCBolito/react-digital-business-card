import React from "react";
import img_profile from "../images/image.jpg";
import img_email from "../images/email.png";
import img_linkedin from "../images/linkedin.png";

export default function Info() {
	return (
		<header>
			<img className="header--img" src={img_profile} alt="Joshua Caleb Bolito"></img>
			<div className="header--txt-content">
				<h1 className="header--name">Joshua Caleb Bolito</h1>
				<h2 className="header--position">Frontend Developer</h2>
				<h3 className="header--website">jcbolito.website</h3>
				<div className="header--buttons">
					<a href="https://mail.google.com/mail/?view=cm&fs=1&to=bolitojoshuacaleb@gmail.com" rel="noreferrer" target="_blank">
						<button className="header--btn email">
							<img src={img_email} alt="Email"></img>
							Email
						</button>
					</a>
					<a href="https://www.linkedin.com/in/joshua-caleb-bolito-7a7401214/" rel="noreferrer" target="_blank">
						<button className="header--btn linkedin">
							<img src={img_linkedin} alt="LinkedIn"></img>
							LinkedIn
						</button>
					</a>
				</div>
			</div>
		</header>
	);
}