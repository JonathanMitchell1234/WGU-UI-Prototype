import React from "react";
import Hero from "../Components/hero";
import Intro from "../Components/intro";

const backgroundImage =
	"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2943&q=80";

const introContent = {
	title: '"Evidence-based pet care advice for every pet lover"',
	content: `Cats were first domesticated around 7500 BCE in the western Asia region and are currently the second most popular domestic pet in the United States. While there are over 60 unique documented cat breeds, care and diet can differ between breeds. However, some diets and practices are generally recommended for the well-being of your fluffy family member regardless of breed.`,
};

const Cats = () => {
	return (
		<>
			<Hero backgroundImage={backgroundImage} title="Cats" />
			<Intro title={introContent.title} content={introContent.content} />
			{/* Rest of your Cats page content */}
		</>
	);
};

export default Cats;
