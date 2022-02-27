import axios from "../config/axios";

export const searchUser = async searchQuery => {
	return await axios.get("/users/search/" + searchQuery);
};

export const getUserProfile = async id => {
	return await axios.get("/users/" + id);
};

export const updateProfile = async (
	id,
	name,
	bio,
	username,
	email,
	phoneNumber
) => {
	return await axios.patch("users/" + id, {
		name,
		bio,
		username,
		email,
		phoneNumber,
		publicStatus,
	});
};

export const getAllUsers = async () => {
	return await axios.get("/users/all/");
};
