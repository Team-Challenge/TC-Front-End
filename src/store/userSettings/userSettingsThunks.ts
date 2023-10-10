import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFullName } from './userSettingsSlice';
import axios from 'axios';

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
        'http://207.154.197.128:8080/accounts/change_full_name',
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