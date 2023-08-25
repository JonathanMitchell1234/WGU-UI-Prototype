import styled from "styled-components";

const Intro = () => {

    const IntroStyle = styled.p `

    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
    margin: 3 auto;
    color: white;
    `;


    return (
		<IntroStyle>
			<h2>"Evidence-based pet care advice for every pet lover"</h2>
			Pets are nature's gift to humanity. It has been scientifically proven that opening our homes and hearts to a pet increases our longevity
			and improves our overall quality of life as well as the lives of our pets. At Pet Paradigm Professionals, our mission is to offer
			resources to help you care for your furry, scaly, feathery, and slimy loved ones. Our pet experts—or “Pexperts”—have been working with pet
			owners and professionals alike for the past twelve years. They offer one-on-one consultations with current and prospective pet owners as
			well as group presentations designed for veterinary, pet shelter, and pet breeding professionals. <br />
			<br />
			Looking for basic pet care advice for the most common type of pets? Need additional help determining which type of pet is right for you
			and your family? We will work with you and provide tailored evidence-based pet care to ensure lifelong health and wellness of your new
			companion.
		</IntroStyle>
	);
}

export default Intro;

