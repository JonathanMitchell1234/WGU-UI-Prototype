import React from "react";
import styled from "styled-components";

const IntroStyle = styled.p`
	font-size: 1.5rem;
	font-family: "Roboto", sans-serif;
	text-align: center;
	margin: 3 auto;
	color: white;
`;

const Intro = ({ title, content }) => {
	return (
		<IntroStyle>
			<h2>{title}</h2>
			{content}
		</IntroStyle>
	);
};

export default Intro;
