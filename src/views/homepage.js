import React from "react";
import Hero from "../Components/hero";
import MediaCard from "../Components/about";
import BasicTable from "../Components/table";
import Intro from "../Components/intro";

const backgroundImage =
	"https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80";

const introContent = {
	title: '"Evidence-based pet care advice for every pet lover"',
	content: `Pets are nature's gift to humanity. It has been scientifically proven that opening our homes and hearts to a pet increases our longevity
  and improves our overall quality of life as well as the lives of our pets. At Pet Paradigm Professionals, our mission is to offer
  resources to help you care for your furry, scaly, feathery, and slimy loved ones. Our pet experts—or “Pexperts”—have been working with pet
  owners and professionals alike for the past twelve years. They offer one-on-one consultations with current and prospective pet owners as
  well as group presentations designed for veterinary, pet shelter, and pet breeding professionals. 
  Looking for basic pet care advice for the most common type of pets? Need additional help determining which type of pet is right for you
  and your family? We will work with you and provide tailored evidence-based pet care to ensure lifelong health and wellness of your new
  companion.`
};

const HomePage = () => {
	return (
		<>
			<Hero backgroundImage={backgroundImage} title="Paradigm Pet Professionals" />
			<Intro title={introContent.title} content={introContent.content} />
			<MediaCard />
			<BasicTable />
		</>
	);
}

export default HomePage;
