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
	createData("General Adoption Resources", "http://theshelterpetproject.org/"),
	createData("ASPCA", "http://aspca.org/"),
	createData("Fish Rescue", "http://sterlingshelter.org/humane-society/koi-fish-rescue/"),
	createData("Snake Rescue", "http://savethesnakes.org/snakerescuecall/"),
	createData("Bird Rescue", "http://ftlob.rescuegroups.org/"),
];

export default function BasicTable() {
	return (
		<>
			<TableContainer
				component={Paper}
				sx={{
					backgroundColor: "#003B6D",
					color: "white",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					padding: "1.5rem",
				}}
			>
				<MoreInfo />
				<Table sx={{ maxWidth: 1 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: "bold", color: "white", fontSize: 18 }}>Resources</TableCell>
							<TableCell sx={{ fontWeight: "bold", color: "white", fontSize: 18 }} align="right">
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
									<a href={row.URL} target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration:"none"}}>
										{row.URL}
									</a>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
