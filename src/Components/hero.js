import styled from "styled-components";

const HeroPhoto = styled.div`
	background-image: url("https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 50vh;
	width: 100%;
	display: flex;
`;

const Hero = () => {

    return (
        <HeroPhoto />
    );
}

export default Hero;