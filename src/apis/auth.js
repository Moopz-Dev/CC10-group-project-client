import axios from "../config/axios";

export const facebookLogin = async user => {
	return await axios.post("/facebooklogin", user);
};
