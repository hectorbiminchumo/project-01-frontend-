import axios from 'axios';

// Type the environment variable
const backendUrl: string | undefined = import.meta.env.VITE_BACKEND_URL;

if (!backendUrl) {
  throw new Error('VITE_BACKEND_URL environment variable is not set');
}

const axiosClient = axios.create({
  baseURL: backendUrl,
});

export default axiosClient;
