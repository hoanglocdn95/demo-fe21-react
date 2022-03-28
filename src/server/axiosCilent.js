import axios from 'axios';

const axiosClient = {
  get: async (url, token) => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  },
  post: async (url, data, token) => {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/${url}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  },
  put: async (url, data, token) => {
    const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/${url}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  },
  patch: async (url, data, token) => {
    const res = await axios.patch(`${process.env.REACT_APP_BASE_URL}/${url}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  },
};

export default axiosClient;
