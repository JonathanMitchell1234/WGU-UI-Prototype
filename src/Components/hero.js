import React from "react";
import styled from "styled-components";

const HeroPhoto = styled.div`
	background-image: url("https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 50vh;
	width: 100%;
	display: flex;
	position: absolute;
`;

const Header = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 2vw;
	font-family: "Roboto", sans-serif;
	letter-spacing: 0.2rem;
	z-index: 1;
`;

const Hero = () => {
	return (
		<>
			<HeroPhoto />
			<Header>
				<h1>Paradigm Pet Professionals</h1>
			</Header>
		</>
	);
};

export default Hero;
