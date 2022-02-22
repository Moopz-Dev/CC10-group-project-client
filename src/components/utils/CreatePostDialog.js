import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Container } from "@mui/material";
import "../../styles/utils/createPostDialog.css";
// import { FiImage } from 'react-icons/fi';
import axios from "../../config/axios";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const CreatePostDialog = ({ handleCreatePostDialog, openDialog }) => {
	// const [previewImage, setPreviewImage] = useState(null);
	// const [selectedFile, setSelectedFile] = useState(null);
	// const [uploadedImage, setUploadedImage] = useState(null);
	// const imagePicker = useRef(null);

	// const onSelectFile = (event) => {
	//   const file = event.target.files[0];
	//   console.log(file, typeof file);
	//   let reader = new FileReader();
	//   reader.readAsDataURL(file);
	//   reader.onloadend = (e) => {
	//     setPreviewImage(reader.result);
	//   };
	//   setSelectedFile(file);
	// };

	const [media, setMedia] = useState([]);
	// const [upload, setUpload] = useState([]);
	const [message, setMessage] = useState("Input message here");
	const fileUpload = e => {
		const files = e.target.files;
		if (files) {
			setMedia([...e.target.files]);
			// setUpload(e.target.files);
		}
		console.log(media);
	};
	const uploadPost = e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("message", message);
		for (let i = 0; i < media.length; i++) {
			formData.append("media", media[i]);
		}
		console.log(formData);
		axios.post("/posts/", formData).then(res => console.log(res));
	};

	return (
		<>
			<Container maxWidth="sm">
				<Button variant="outlined" onClick={handleCreatePostDialog}>
					Open full-screen dialog
				</Button>
				<Dialog
					fullScreen
					open={openDialog}
					onClose={handleCreatePostDialog}
					TransitionComponent={Transition}>
					<AppBar sx={{ position: "relative" }}>
						<Toolbar>
							<IconButton
								edge="start"
								color="inherit"
								onClick={handleCreatePostDialog}
								aria-label="close">
								<CloseIcon />
							</IconButton>
							<Typography
								sx={{ ml: 2, flex: 1, justifyContent: "center" }}
								variant="h6"
								component="div">
								New post
							</Typography>
							<Button
								autoFocus
								color="inherit"
								onClick={handleCreatePostDialog}>
								share
							</Button>
						</Toolbar>
					</AppBar>
					<Box
						sx={{
							outline: "2px dashed red",
							width: "100vw",
							height: "500px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						{/* Select file for create post */}
						{/* <Box sx={{ width: '50px' }}>
              <div className='container-imagePicker'>
                <FiImage onClick={() => imagePicker.current.click()} />

                <input
                  type='file'
                  accept='image/png, image/jpeg, image/jpg, video/mp4'
                  multiple
                  id='input-imagePicker'
                  ref={imagePicker}
                  onChange={onSelectFile}
                />
              </div>
              {/* {uploadedURL && <div>url: {uploadedURL}</div>} */}
						{/* {selectedFile && (
                <button onClick={() => setUploadedImage()}>Upload</button>
              )}
              {previewImage && (
                <div>
                  <button onClick={() => setPreviewImage(null)}>Remove</button>
                </div>
              )}
              {previewImage && (
                <div>
                  Preview
                  <img src={previewImage} alt='selected' width={300} height={300}  />
                </div>
              )} */}
						{/* </Box> */}
						{/* for  P' Moo */}

						{/* Preview Zone */}
						<ul style={{ background: "purple" }}>
							{media.length > 0 &&
								media.map(item =>
									item.type.split("/")[0] === "video" ? (
										<video src={URL.createObjectURL(item)}></video>
									) : (
										<img src={URL.createObjectURL(item)} alt="" />
									)
								)}
						</ul>
						{/*Select Button*/}
						<div>
							<label role="button">
								Select Picture/Video{" "}
								<input
									type="file"
									multiple
									hidden
									accept="image/*,video/*"
									onChange={fileUpload}
								/>
							</label>
						</div>
					</Box>
					{/* input message */}
					<div>
						<input
							type="text"
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
					{/* Submit button */}
					<button onClick={uploadPost}>Upload Story</button>
				</Dialog>
			</Container>
		</>
	);
};

export default CreatePostDialog;
