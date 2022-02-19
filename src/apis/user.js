import axios from "../config/axios";

export const searchUser = async searchQuery => {
	return await axios.get("/users/search/" + searchQuery);
};
