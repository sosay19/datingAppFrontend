// store/reducers/userReducer.ts

import User from '../types/userTypes'; // Import the User interface
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/userActions';

interface UserState {
    data: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                data: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
