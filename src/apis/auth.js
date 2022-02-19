import axios from "../config/axios";

<<<<<<< HEAD
export const facebookLogin = async (user) => {
  return await axios.post("/auth/facebooklogin/", user);
=======
export const facebookLogin = async user => {
	return await axios.post("/auth/facebooklogin/", user);
>>>>>>> 47f8b426652146b1d2a1f5b34f0d10178cd9a659
};

export const registerNewUser = async (
	username,
	email,
	phoneNumber,
	password,
	confirmPassword
) => {
<<<<<<< HEAD
  return await axios.post("/auth/register/", {
    username,
    email,
    phoneNumber,
    password,
    confirmPassword,
  });
};

export const login = async (usernameOrPhoneNumberOrEmail, password) => {
  return await axios.post("auth/login/", {
    usernameOrPhoneNumberOrEmail,
    password,
  });
};

export const getMe = async () => {
  return await axios.get("/user/me");
};

// export const getMe = async () => {
// 	return await axios.get("/user/me");
// };
=======
	return await axios.post("/auth/register/", {
		username,
		email,
		phoneNumber,
		password,
		confirmPassword,
	});
};

export const login = async (usernameOrPhoneNumberOrEmail, password) => {
	return await axios.post("auth/login/", {
		usernameOrPhoneNumberOrEmail,
		password,
	});
};

export const getMe = async () => {
	return await axios.get("/user/me");
};

export const getMe = async () => {
	return await axios.get("/user/me");
};
>>>>>>> 47f8b426652146b1d2a1f5b34f0d10178cd9a659
