import { AxiosResponse } from 'axios';
import { AuthResponse } from '../types';
import { $api } from '../http/index';

const AuthService = {
  login: async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/signin', { email, password });
  },
  registration: async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/signup', { email, password });
  },
  logout: async (): Promise<void> => {
    return $api.post('/logout');
  },
};

export default AuthService;
