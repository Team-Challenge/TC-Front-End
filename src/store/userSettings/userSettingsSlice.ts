import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  full_name: string;
}

const initialState = {
  full_name: '',
} as UserState;

const userSettingsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.full_name = action.payload;
    },
  },
});

export const { setFullName } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;
