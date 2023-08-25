import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreInfo from "./moreinfo";

function createData(resources, URL) {
	return { resources, URL };
}

const rows = [
createData("General Adoption Resources", "theshelterpetproject.org/ "), 
createData("ASPCA", "aspca.org/"),
createData("Fish Rescue", "sterlingshelter.org/humane-society/koi-fish-rescue/"),
createData("Snake Rescue", "savethesnakes.org/snakerescuecall/"),

];

export default function BasicTable() {
	return (
		<>
			<TableContainer
				component={Paper}
				sx={{ backgroundColor: "#003B6D", color: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
			>
				<MoreInfo />
				<Table sx={{ maxWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: "bold", color: "white" }}>Resources</TableCell>
							<TableCell sx={{ fontWeight: "bold", color: "white" }} align="right">
								URL
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.resources} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell sx={{ color: "white" }} component="th" scope="row">
									{row.resources}
								</TableCell>
								<TableCell align="right" sx={{ color: "white" }}>
									{row.URL}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
