import axios from '../config/axios';

export const getAllReels = async () => {
  return await axios.get('/reels/all');
};

export const getUserReels = async (userId) => {
  return await axios.get('/reels/user/' + userId);
};

export const createReel = async (message) => {
  return await axios.post('/reels/', { message });
};

export const updateReel = async (id, message) => {
  return await axios.patch('/reels/' + id, { message });
};
export const deleteReel = async (id) => {
  return await axios.delete('/reels/' + id);
};
