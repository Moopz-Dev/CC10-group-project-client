import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/system";
import axios from "../../config/axios";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const CreateStoryDialog = ({ handleCreateStoryDialog, openStoryDialog }) => {
	const [media, setMedia] = useState([]);
	const [message, setMessage] = useState("");

	const fileUpload = e => {
		const files = e.target.files;
		if (files) {
			setMedia([...e.target.files]);
			// setUpload(e.target.files);
		}
		// console.log(media);
	};
	const uploadPost = e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("message", message);
		for (let i = 0; i < media.length; i++) {
			formData.append("media", media[i]);
		}
		// console.log(formData);
		axios.post("/stories/", formData).then(res => {
      console.log(res);
      handleCreateStoryDialog();
    });
	};
	return (
		<div>
			<Dialog
				open={openStoryDialog}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleCreateStoryDialog}
				fullScreen={true}>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Button onClick={handleCreateStoryDialog}>
						<ClearIcon sx={{ color: "gray" }} />
					</Button>

					<DialogTitle sx={{ textAlign: "center" }}>
						{"Create story"}
					</DialogTitle>
					<Box sx={{ width: "50px" }}></Box>
				</Box>
				<DialogContent>
					<form>
						{/* for input and preview file */}
						{/* Preview Zone */}
						<ul style={{ display: "flex" }}>
							{media.length > 0 &&
								media.map(item =>
									item.type.split("/")[0] === "video" ? (
										<video
											src={URL.createObjectURL(item)}
											width={200}
											height={250}></video>
									) : (
										<img
											src={URL.createObjectURL(item)}
											alt=""
											width={200}
											height={250}
										/>
									)
								)}
						</ul>
						{/*Select Button*/}
						<input
							type="file"
							accept="video/mp4, image/*"
							placeholder="select video from device"
							onChange={fileUpload}
						/>
						<div>
							{/* <label>Description</label>{' '} */}
							<input
								type="text"
								value={message}
								onChange={e => setMessage(e.target.value)}
								placeholder="Write a caption..."
								style={{ border: "none", fontSize: "15px" }}
							/>
						</div>
					</form>
				</DialogContent>
				<DialogActions sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						onClick={uploadPost}
						sx={{
							background: "lightgray",
							borderRadius: "50px",
							color: "black",
						}}>
						Post your story
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CreateStoryDialog;
