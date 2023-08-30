import React from "react";
import styled from "styled-components";

const HeroPhoto = styled.div`
	background-image: url(${(props) => props.backgroundImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 50vh;
	width: 100%;
	display: flex;
	position: absolute;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 50vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 0;
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
	font-size: 2vw;
	font-family: "Roboto", sans-serif;
	letter-spacing: 0.2rem;
	z-index: 1;
`;

const HeaderTitle = styled.h1`
	font-size: 5vw;
	font-family: "Roboto", sans-serif;
	letter-spacing: 0.2rem;
	z-index: 1;
	border: 2px solid white;
	color: white;
	outline: 3px solid #bdbdbd;
	-webkit-text-stroke: 1px black;
	text-transform: uppercase;

	@media (max-width: 768px) {
		-webkit-text-stroke: 0px black;
	}
`;

const Hero = ({ backgroundImage, title }) => {
	return (
		<>
			<HeroPhoto backgroundImage={backgroundImage} />
			<Header>
				<Overlay />
				<HeaderTitle>{title}</HeaderTitle>
			</Header>
		</>
	);
};

export default Hero;
