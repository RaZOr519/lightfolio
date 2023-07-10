import React from "react";
import "./css/LBody.css";
import sachin from "./images/sachin.png";
import arrow from "./images/arrow-down.png";

function Navbar() {
	return (
		<div class="LPage">
			<div class="Card-Customer">
				<img className="arrow" src={arrow} border="0" />
				<div className="Card-Text-Body">
					<h1>Happy Customers</h1>
					<div className="Card-Heading">250+</div>
					<div className="Card-Text">
						With my unwavering expertise and commitment to
						excellence, I continuously strive to deliver exceptional
						outputs that consistently surpass the expectations of
						over 250 satisfied customers.
					</div>
				</div>
				{/*
				<div className="rlines">
					<div className="yellowline"></div>
					<div className="blueline"></div>
					<div className="pinkline"></div>
				</div>*/}
			</div>
			<div class="Card-Projects">
				<div className="Card-Heading-2">300+</div>
				<div className="Card-Text-2">Completed Projects</div>
				<img className="sachin" src={sachin} border="0" />
			</div>
			<div class="Card-Samples">
				<a href="/portfolio">
					<div className="Card-Heading-3">
						Wanna <br /> see my <br />
						latest <br /> projects...
					</div>
					<div className="Card-Text-3">Portfolio</div>
					<img className="arrow-2" src={arrow} border="0" />
				</a>
			</div>
		</div>
	);
}

export default Navbar;
