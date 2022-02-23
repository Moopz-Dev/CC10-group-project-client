import axios from "../config/axios";

export const getAllStories = async () => {
	return await axios.get("/stories/all");
};

export const getUserStories = async userId => {
	return await axios.get("/stories/user/" + userId);
};

// export const createStory = async (message, media) => {
// 	return await axios.post("/stories/", { message, media });
// };

export const updateStory = async (id, message, media) => {
	return await axios.patch("/stories/" + id, { message, media });
};
export const deleteStory = async id => {
	return await axios.delete("/stories/" + id);
};
