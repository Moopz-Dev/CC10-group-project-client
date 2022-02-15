import axios from '../config/axios';

export const getAllPosts = async () => {
  return await axios.get('/posts/all');
};

export const getUserPosts = async (userId) => {
  return await axios.get('/posts/user/' + userId);
};

export const createPost = async (message, media) => {
  return await axios.post('/posts/', { message, media });
};

export const updatePost = async (id, message) => {
  return await axios.patch('/posts/' + id, { message });
};

export const updatePostMedia = async (id, media) => {
  return await axios.patch('/posts/' + id, { media });
};

export const deletePost = async (id) => {
  return await axios.delete('/posts/' + id);
};
