import axios from 'axios';
import { BASE_URL } from '../http';

export const getAccountsInfo = async () => {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(`http://${BASE_URL}/accounts/info`, {
      headers,
    });
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


