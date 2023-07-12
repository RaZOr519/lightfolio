import React, { useEffect } from "react";
import "./App.css";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	useEffect(() => {
		document.title = "Sachin Dewthuru";
	}, []);

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
