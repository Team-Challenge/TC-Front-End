import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';
import { setAuth } from './authSlice';

export const login = createAsyncThunk(
  'accounts/signin',
  async (credentials: { email: string; password: string }, { dispatch }) => {
    const response = await AuthService.login(credentials.email, credentials.password);
    localStorage.setItem('token', response.data.access_token);
    dispatch(setAuth(true));

    return response.data;
  },
);

export const registration = createAsyncThunk(
  'accounts/signup',
  async (
    credentials: { full_name: string | undefined; email: string; password: string },
    { dispatch },
  ) => {
    const response = await AuthService.registration(
      credentials.full_name,
      credentials.email,
      credentials.password,
    );
    if (response.status === 200 && response.data.user) {
      dispatch(login({ email: credentials.email, password: credentials.password }));
      console.log('user is alredy register', response.data.user);
    } else {
      console.log('user is not');
    }
    return response.data;
  },
);

export const logout = createAsyncThunk('/logout', async () => {
  await AuthService.logout();
});
