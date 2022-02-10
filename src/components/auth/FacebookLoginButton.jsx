import React from "react";
import FacebookLogin from "react-facebook-login";
import { facebookLogin } from "../../apis/auth";
import { YOUR_FACEBOOK_APP_ID } from "../../config/env";

function FacebookLoginButton() {
	const signUserIn = async response => {
		console.log("Res -->", response);
		const {
			name,
			email,
			accessToken,
			userID,
			picture: {
				data: { url: profilePic },
			},
		} = response;
		console.log(profilePic);
		const user = { name, email, accessToken, profilePic, userId: userID };
		await facebookLogin(user);
	};

	return (
		<FacebookLogin
			appId={YOUR_FACEBOOK_APP_ID}
			fields="name,email,picture"
			scope="public_profile, email,user_birthday"
			callback={signUserIn}
		/>
	);
}

export default FacebookLoginButton;
