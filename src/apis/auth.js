import axios from "../config/axios";

export const facebookLogin = async user => {
	return await axios.post("/auth/facebooklogin", user);
};

export const registerNewUser = async (
	username,
	email,
	phoneNumber,
	password,
	confirmPassword
) => {
	return await axios.post("/auth/register", {
		username,
		email,
		phoneNumber,
		password,
		confirmPassword,
	});
};
