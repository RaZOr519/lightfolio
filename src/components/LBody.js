import React from "react";
import "../Homepage.css";
import sachin from "./images/sachin.png";
import arrow from "./images/arrow-down.png";

function Navbar() {
	return (
		<div class="LPage">
			<div class="Card-Customer">
				<img className="arrow" src={arrow} border="0" />
				<h1>Happy Customers</h1>
				<div className="Card-Heading">250+</div>
				<div className="Card-Text">
					With my unwavering expertise and commitment to excellence, I
					continuously strive to deliver exceptional outputs that
					consistently surpass the expectations of over 250 satisfied
					customers. Through meticulous attention to detail and a deep
					understanding of their unique needs, I ensure that each
					project is a testament to my dedication and drive for
					excellence.
				</div>
				<div className="rlines">
					<div className="yellowline"></div>
					<div className="blueline"></div>
					<div className="pinkline"></div>
				</div>
			</div>
			<div class="Card-Projects">
				<div className="Card-Heading-2">300+</div>
				<div className="Card-Text-2">Completed Projects</div>
				<img className="sachin" src={sachin} border="0" />
			</div>
			<div class="Card-Samples">
				<div className="Card-Heading-3">
					Wanna <br /> see my <br />
					latest <br /> projects...
				</div>
				<div className="Card-Text-3">Portfolio</div>
				<img className="arrow-2" src={arrow} border="0" />
			</div>
		</div>
	);
}

export default Navbar;
