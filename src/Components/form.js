import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	padding: 2rem;
	background-color: #676767;
`;

const MUIForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		timeZone: "",
		petName: "",
		petType: "",
		petAge: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform form submission logic here
		console.log(formData);
	};

	return (
		<FormContainer>
            <h2 style={{color: "white", padding: "10px"}}>Need a Consultation? Contact us Here.</h2>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Name"
					variant="outlined"
					name="name"
					value={formData.name}
					onChange={handleChange}
					fullWidth
					margin="normal"
					sx={{ backgroundColor: "white" }}
				/>
				<TextField
					label="Phone Number"
					variant="outlined"
					name="phoneNumber"
					value={formData.phoneNumber}
					onChange={handleChange}
					fullWidth
					margin="normal"
					sx={{ backgroundColor: "white" }}
				/>
				<TextField
					label="Email"
					variant="outlined"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					fullWidth
					margin="normal"
					sx={{ backgroundColor: "white" }}
				/>
				<TextField
					label="Time Zone"
					variant="outlined"
					name="timeZone"
					value={formData.timeZone}
					onChange={handleChange}
					fullWidth
					margin="normal"
					sx={{ backgroundColor: "white" }}
				/>
				<TextField
					label="Pet's Name"
					variant="outlined"
					name="petName"
					value={formData.petName}
					onChange={handleChange}
					fullWidth
					margin="normal"
					sx={{ backgroundColor: "white" }}
				/>
				<TextField
					label="Pet's Type"
					variant="outlined"
					name="petType"
					value={formData.petType}
					onChange={handleChange}
					fullWidth
					margin="normal"
					sx={{ backgroundColor: "white" }}
				/>
				<TextField
					label="Pet's Age"
					variant="outlined"
					name="petAge"
					value={formData.petAge}
					onChange={handleChange}
					fullWidth
					margin="normal"
					sx={{ backgroundColor: "white" }}
				/>
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form>
		</FormContainer>
	);
};

export default MUIForm;
