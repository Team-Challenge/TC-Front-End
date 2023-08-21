import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Auth/authSlice';
const store = configureStore({
  reducer: {
    authSlice,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
