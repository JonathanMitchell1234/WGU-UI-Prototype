import styled from "styled-components";
import React from "react";
import logo from "../logo.png";

const FooterStyles = styled.div`
	background-color: #6699cc;
	color: white;
	padding: 1.5rem;
	font-family: "Roboto", sans-serif;
	margin-top: 2rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin 0 auto;
`;

const Footer = () => {
	return (
		<>
			<FooterStyles>
				<div>
					<a href="https://www.facebook.com/Paradigm-Pet-Professionals-LLC-100232108852622">
						<img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="facebook" />
					</a>
					<a href="https://www.instagram.com/paradigmpetprofessionals/">
						<img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="instagram" />
					</a>
					<a href="https://www.linkedin.com/in/paradigm-pet-professionals-llc-2b1a1b1b3/">
						<img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin" />
					</a>
				</div>
				<span>
					<img height="60" src={logo} alt="logo" />
				</span>
				<p>
					© 2021 by <a href="https://www.linkedin.com/in/paradigm-pet-professionals-llc-2b1a1b1b3/">Paradigm Pet Professionals</a>
				</p>
			</FooterStyles>
		</>
	);
};

export default Footer;
