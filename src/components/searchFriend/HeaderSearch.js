import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllUsers, searchUser } from "../../apis/user";

const HeaderSearch = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");
	const [allUsers, setAllUsers] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		getAllUsers().then(res => {
			setAllUsers(res.data);
		});
	}, []);

	useEffect(() => {
		const delayed = setTimeout(() => {
			if (searchQuery && searchQuery.length >= 3) {
				searchUser(searchQuery).then(res => setSearchResult(res.data));
			}
		}, 1000);
		return () => clearTimeout(delayed);
	}, [searchQuery]);

	return (
		<>
			<Box sx={{ pb: 7 }}>
				<Paper
					sx={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						zIndex: 1100,
					}}
					elevation={1}>
					<div
						style={{
							width: "10px",
						}}>
						<BottomNavigationAction
							icon={<ArrowBackIosNewIcon />}
							onClick={e => navigate("/")}
						/>
					</div>

					{/* search */}
					<div>
						<Stack spacing={2} sx={{ width: 300, height: "30px" }}>
							{allUsers.length > 0 && (
								<Autocomplete
									freeSolo
									id="free-solo-2-demo"
									disableClearable
									// options={top100Films.map(option => option.title)}
									options={allUsers.map(item => item.username)}
									renderInput={params => (
										<TextField
											{...params}
											label="Search"
											onChange={e => setSearchQuery(e.target.value)}
											value={searchQuery}
											InputProps={{
												...params.InputProps,
												type: "search",
											}}
											size="small"
										/>
									)}
								/>
							)}
							{/* {JSON.stringify("search Query : " + searchQuery)}
							{JSON.stringify("users  " + allUsers)} */}
							{JSON.stringify(searchResult)}
						</Stack>
					</div>

					<div></div>
				</Paper>
			</Box>
		</>
	);
};

export default HeaderSearch;

