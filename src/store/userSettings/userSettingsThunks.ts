import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFullName, setPassword, setPhoneNumber } from './userSettingsSlice';
import axios from 'axios';
import { setAuth } from '../auth/authSlice';
import { BASE_URL } from '../../http';

export const changeFullName = createAsyncThunk(
  'userSettings/changeFullName',
  async (newFullName: string, { dispatch }) => {
    try {
      const token = localStorage.getItem('token');
      console.log(token, 'token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        `http://${BASE_URL}/accounts/change_full_name`,
        { full_name: newFullName },
        { headers },
      );
      console.log(response.data, 'data');
      console.log(response.status, 'status');
      if (response.status === 200) {
        dispatch(setFullName);
        console.log(response.data, 'data');
        return response.data;
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const changePhoneNumber = createAsyncThunk(
  'userSettings/changePhoneNumber',
  async (addNumber: string | undefined, { dispatch }) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        `http://${BASE_URL}/accounts/change_phone_number`,
        {
          phone_number: addNumber,
        },
        { headers },
      );
      if (response.status === 200) {
        dispatch(setPhoneNumber);
        return response.data;
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const changePassword = createAsyncThunk(
  'userSettings/changePassword',
  async (
    credentials: { currentPassword: string | undefined; newPassword: string | undefined },
    { dispatch },
  ) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        `http://${BASE_URL}/accounts/change_password`,
        {
          current_password: credentials.currentPassword,
          new_password: credentials.newPassword,
        },
        { headers },
      );
      if (response.status === 200) {
        dispatch(setPassword);
        return response.data;
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const userLogout = createAsyncThunk('userSettings/logout', async (_, { dispatch }) => {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.delete('http://207.154.197.128:8080/accounts/logout', { headers });
    if (response.status === 200) {
      localStorage.removeItem('token');
      dispatch(setAuth(false));
      return response.data;
    }
  } catch (e) {
    const error = e as Error;
    throw error;
  }
});
