// UserActions.tsx

import { createAsyncThunk } from '@reduxjs/toolkit';

// Define your API or service for user authentication
import * as AuthService from '../../services/auth';

// Define action creator for user login
export const userLogin = createAsyncThunk(
  'user/login',
  async (loginData: { username: string; password: string }, { rejectWithValue }) => {
    try {
      // Call your authentication service or API to perform user login
      const response = await AuthService.login(loginData.username, loginData.password);

      // Return user data or access token upon successful login
      return response.data;
    } catch (error) {
      // Handle login failure, return an error message
      return rejectWithValue(error.response.data);
    }
  }
);

// Define action creator for user logout
export const userLogout = createAsyncThunk('user/logout', async () => {
  // Call your authentication service or API to perform user logout
  await AuthService.logout();

  // You can clear user data from the state or perform any other cleanup
});

// You can define more user-related actions as needed
