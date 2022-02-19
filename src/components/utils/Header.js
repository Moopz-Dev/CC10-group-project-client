import React from "react";
import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
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
						zIndex: 1100,
					}}
					elevation={0}>
					<Link to="/" style={{ textDecoration: "none", color: "black" }}>
						<Box
							sx={{
								marginLeft: "15px",
								alignSelf: "center",
								fontFamily: "cookie",
								fontSize: "2rem",
							}}>
							Instagrum
						</Box>
					</Link>

					<Box sx={{ width: 250 }}>
						<BottomNavigationAction icon={<PostAddIcon />} />
						<BottomNavigationAction icon={<FavoriteBorderOutlinedIcon />} />
						<Link to="/mesenger">
							<BottomNavigationAction icon={<ChatOutlinedIcon />} />
						</Link>
					</Box>
				</Paper>
			</Box>
		</>
	);
};

export default Header;
