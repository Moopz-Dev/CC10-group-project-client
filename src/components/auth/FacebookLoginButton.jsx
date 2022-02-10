import React from "react";
import FacebookLogin from "react-facebook-login";
import { facebookLogin } from "../../apis/auth";
import { YOUR_FACEBOOK_APP_ID } from "../../config/env";
import axios from "../../config/axios";
function FacebookLoginButton() {
	const signUserIn = async response => {
		console.log("Res -->", response);
		const { name, email, accessToken, userID } = response;
		const user = { name, email, accessToken, userId: userID };

		await axios({
			method: "post",
			url: "http://localhost:4000/signin/facebook",
			data: {
				user,
			},
		});
	};

	return (
		<FacebookLogin
			appId={YOUR_FACEBOOK_APP_ID}
			fields="name,email"
			scope="public_profile, email"
			callback={signUserIn}
		/>
	);
}

export default FacebookLoginButton;
