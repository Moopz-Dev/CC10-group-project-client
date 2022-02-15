import axios from "../config/axios";

export const followUser = async targetId => {
	return await axios.post("/follow/" + targetId);
};

export const unFollowUser = async targetId => {
	return await axios.delete("/follow/" + targetId);
};

export const getFollowersCount = async targetId => {
	return await axios.get("/follow/follower/" + targetId);
};

export const getFollowingCount = async targetId => {
	return await axios.get("/follow/following/" + targetId);
};
