import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import the Link component

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;
	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export default function MediaCard() {
	return (
		<>
			<CardContainer>
				<Card sx={{ maxWidth: 545, border: "2px solid white" }}>
					<CardMedia
						sx={{ height: 140 }}
						image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2943&q=80"
						title="cats"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Cats
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Cats were first domesticated around 7500 BCE in the western Asia region and are currently the second most popular domestic
							pet in the United States. Click learn more below to find out more about caring for your cat.
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Share</Button>
						<Button size="small">
							<Link to="/views/cats">Learn More</Link> {/* Use Link component */}
						</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 545, border: "2px solid white" }}>
					<CardMedia
						sx={{ height: 140 }}
						image="https://plus.unsplash.com/premium_photo-1676479611993-05b0c9232f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
						title="dogs"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Dogs
						</Typography>
						<Typography variant="body2" color="text.secondary">
							The domestic dog is an extremely social animal and offers a diverse variety of choices as there are well over 300 breeds
							recognized by the World Canine Organization. Click learn more below to find out more about caring for your dog.
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Share</Button>
						<Button size="small">
							<Link to="/views/dogs">Learn More</Link> {/* Use Link component */}
						</Button>
					</CardActions>
				</Card>
				<Card sx={{ maxWidth: 545, border: "2px solid white" }}>
					<CardMedia
						sx={{ height: 140 }}
						image="https://images.unsplash.com/photo-1586768045025-f7cacc295831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3113&q=80"
						title="birds"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Birds
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Birds are very intriguing creatures with specific needs regarding their care and relationships with other birds. Click
							learn more below to find out more about caring for your bird.
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Share</Button>
						<Button size="small">
							<Link to="/views/birds">Learn More</Link> {/* Use Link component */}
						</Button>
					</CardActions>
				</Card>
			</CardContainer>
		</>
	);
}
