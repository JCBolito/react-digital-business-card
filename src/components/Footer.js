import React from "react";
import img_twitter from "../images/twitter.png";
import img_facebook from "../images/facebook.png";
import img_instagram from "../images/instagram.png";
import img_github from "../images/github.png";

export default function Footer() {
	return (
		<footer>
			<a href="https://twitter.com/JCBliiiiiitz" rel="noreferrer" target="_blank"><img src={img_twitter} alt="Twitter"></img></a>
			<a href="https://www.facebook.com/JCBolito296/" rel="noreferrer" target="_blank"><img src={img_facebook} alt="Facebook"></img></a>
			<a href="https://www.instagram.com/jc.blitz/" rel="noreferrer" target="_blank"><img src={img_instagram} alt="Instagram"></img></a>
			<a href="https://github.com/JCBolito" rel="noreferrer" target="_blank"><img src={img_github} alt="GitHub"></img></a>
		</footer>
	);
}