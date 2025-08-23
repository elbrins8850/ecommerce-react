import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Products API
export const getProducts = () => api.get('/products');
export const getProductsByCategory = (category) => api.get(`/products/category/${category}`);
export const getProductById = (id) => api.get(`/products/${id}`);

export default api;