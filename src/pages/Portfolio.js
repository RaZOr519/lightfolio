import React from "react";
import arrow from "../components/images/arrow-down.png";
import "../Homepage.css";

function Portfolio() {
	return (
		<div className="App-2">
			<div className="Card-Container">
				<div class="Card-Samples-2">
					<a
						href="https://www.behance.net/sachin-dewthuru"
						target="_blank"
					>
						<div className="Card-Heading-3">
							3D Portfolio <br /> at Behance
							<br />
							<br />
							<br />
						</div>
					</a>
					<div className="Card-Text-3">Behance</div>
					<a
						href="https://www.behance.net/sachin-dewthuru"
						target="_blank"
					>
						<img className="arrow-4" src={arrow} border="0" />
					</a>
				</div>

				<div class="Card-Samples-3">
					<a href="https://github.com/RaZOr519" target="_blank">
						<div className="Card-Heading-3">
							Coding Portfolio <br /> at GitHub
							<br />
							<br />
							<br />
						</div>
					</a>
					<div className="Card-Text-3">GitHub</div>
					<a href="https://github.com/RaZOr519" target="_blank">
						<img className="arrow-5" src={arrow} border="0" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
