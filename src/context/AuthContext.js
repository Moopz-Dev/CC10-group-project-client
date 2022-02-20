import { createContext, useEffect, useState } from "react";
import { getMe } from "../apis/auth";
import axios from "../config/axios";
import { setToken, clearToken, getToken } from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (getToken()) {
			getMe()
				.then(res => setUser(res.data.user))
				.catch(err => console.log(err));
		}
	}, []);

	const login = async (usernameOrPhoneNumberOrEmail, password) => {
		try {
			const res = await axios.post("/auth/login", {
				usernameOrPhoneNumberOrEmail,
				password,
			});
			setToken(res.data.token);
			setUser(res.data.user);
		} catch (err) {
			console.log(err);
		}
	};

	const logout = () => {
		clearToken();
		setUser(null);
	};

	const updateUser = value => {
		setUser(prev => ({ ...prev, ...value }));
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, updateUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;

export { AuthContext };
