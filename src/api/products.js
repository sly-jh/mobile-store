import axios from 'axios';

const API_BASE = 'https://itx-frontend-test.onrender.com/api';

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE}/product`);
  return response.data;
};

export const getProductById = async id => {
  const response = await axios.get(`${API_BASE}/product/${id}`);
  return response.data;
};
