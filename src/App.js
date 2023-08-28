import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./Components/nav";
import HomePage from "./views/homepage";
import Cats from "./views/cats";
import Footer from "./Components/footer";



function App() {
	return (
		<div className="App">
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<HomePage />} /> {/* Render HomePage component on "/" */}
				<Route path="/views/cats" element={<Cats/>} />
				{/* Define more routes here */}
			</Routes>
      <Footer />
		</div>
	);
}

export default App;
