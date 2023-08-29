import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./Components/nav";
import HomePage from "./views/homepage";
import Cats from "./views/cats";
import Footer from "./Components/footer";
import Birds from "./views/birds";
import Dogs from "./views/dogs";



function App() {
	return (
		<div className="App">
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<HomePage />} /> {/* Render HomePage component on "/" */}
				<Route path="/views/cats" element={<Cats/>} />
        <Route path="/views/birds" element={<Birds/>} />
        <Route path="/views/dogs" element={<Dogs/>} />
				
			</Routes>
      <Footer />
		</div>
	);
}

export default App;
