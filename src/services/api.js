import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const getPlatos = () => api.get('/platos');
export const createPlato = (plato) => api.post('/platos', plato);
export const deletePlato = (id) => api.delete(`/platos/${id}`);

export default api;