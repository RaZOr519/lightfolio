import React from "react";
import { useNavigate } from "react-router-dom";
import "../Homepage.css";

function Navbar() {
	const navigate = useNavigate();

	const navigateTo = (path) => {
		navigate(path);
	};

	return (
		<div className="Navbar-Top-Pos">
			<div className="Navbar-Top">
				<button onClick={() => navigateTo("/")}>Home</button>
				<button onClick={() => navigateTo("/portfolio")}>
					Portfolio
				</button>
				<button onClick={() => navigateTo("/services")}>
					Services
				</button>
				<button onClick={() => navigateTo("/about")}>About</button>
				<button onClick={() => navigateTo("/contact")}>Contact</button>
			</div>
		</div>
	);
}

export default Navbar;
