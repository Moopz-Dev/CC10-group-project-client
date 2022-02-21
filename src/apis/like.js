import axios from "../config/axios";

export const likeStory = async storyId => {
	return await axios.post("like/story/" + storyId);
};
export const likeStoryComment = async storyCommentId => {
	return await axios.post("like/story-comment/" + storyCommentId);
};
export const likeReel = async reelId => {
	return await axios.post("like/story/" + reelId);
};
export const likeReelComment = async reelCommentId => {
	return await axios.post("like/reel-comment/" + reelCommentId);
};
export const likePost = async postId => {
	return await axios.post("like/post/" + postId);
};
export const likePostComment = async postCommentId => {
	return await axios.post("like/post-comment/" + postCommentId);
};
