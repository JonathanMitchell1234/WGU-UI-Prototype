import React from "react";
import Hero from "../Components/hero";
import Intro from "../Components/intro";
import styled from "styled-components";
import browncat from "../images/browncat.jpg";

const backgroundImage =
	"https://images.unsplash.com/photo-1560813562-fd09315f5ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2932&q=80";

const introContent = {
	title: "Birds",
	content: `Birds are very intriguing creatures as they can range from birds as small as a Cuban bee hummingbird (about two inches long and a little over 1/20 of an ounce) to as large as an ostrich. While most birds fly, there are some that don't. Birds are amazing and each breed is unique in its own way, particularly when it comes to their relational needs and well-being.
    `,
};

const MainInfo = styled.div`
	color: white;
	font-family: "Roboto", sans-serif;
	font-size: 1.5rem;
	padding: 1.5rem;
`;

const Birds = () => {
	return (
		<>
			<Hero backgroundImage={backgroundImage} title="Birds" />
			<Intro title={introContent.title} content={introContent.content}  />
			<MainInfo>
				<h2 style={{ textAlign: "center" }}>
					<strong>Caring for your Bird</strong>
				</h2>
				<p>
					Unfortunately, birds can experience sadness and depression just like humans. A number of root causes may be responsible for your
					bird's depression such as an illness (either physical or mental), losing its companion, or increasingly becoming bored. Some signs
					to help identify if your bird is experiencing depression may include the following:
					<aside style={{ float: "right" }}>
						<img src={browncat} alt="brown cat" style={{ width: 300, borderRadius: "8px" }} />
					</aside>
					<ul>
						<li>reduced appetite</li>
						<li>becoming increasingly irritable</li>
						<li>aggressive behavior</li>
						<li>songs have a different, more solemn tone</li>
					</ul>
					Four Weeks to One Year Kittens can start being introduced to soft wet kitten food, typically around three to four weeks after
					birth. According to the ASPCA, kittens at this age should eat half to one cup of dry kitten food or six to nine ounces of wet
					kitten food per day. If your kitten has difficulties eating hard food, a small amount of water can be added to soften the food.{" "}
					<br /> <br />
				</p>
			</MainInfo>
		</>
	);
};

export default Birds;
