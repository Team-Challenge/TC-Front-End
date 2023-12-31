import axios from 'axios';
import { AppDispatch, AuthResponse } from '../../types';
import { setAuth, setUser, setLoading } from './authSlice';
import { BASE_URL } from '../../http';

interface ErrorMessage {
  message: string;
}

export const checkAuth = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get<AuthResponse>(`${BASE_URL}/accounts/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      localStorage.setItem('token', response.data.access_token);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      const error = e as ErrorMessage;
      console.log(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
