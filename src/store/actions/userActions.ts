// store/actions/userActions.ts

import { Dispatch } from 'redux';
import User from '../types/userTypes'; // Import the User interface

// Define action types
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// Action creators for fetching user data
export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user: User) => ({
    type: FETCH_USER_SUCCESS,
    payload: user,
});

export const fetchUserFailure = (error: string) => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});

// Async action creator to fetch user data from an API
export const fetchUser = () => async (dispatch: Dispatch) => {
    dispatch(fetchUserRequest());

    try {
        // Simulate fetching user data from an API
        const response = await fetch('/api/user');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const user: User = await response.json();
        dispatch(fetchUserSuccess(user));
    } catch (error) {
        dispatch(fetchUserFailure(error.message));
    }
};
