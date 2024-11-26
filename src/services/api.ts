import axios from 'axios';
import { mockDashboardData } from '../mock/dashboardData';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchDashboardData = async () => {
  // Use this for development until backend is ready
  return Promise.resolve(mockDashboardData);
  
  // Comment out the actual API call for now
  // const response = await api.get('/dashboard');
  // return response.data;
};